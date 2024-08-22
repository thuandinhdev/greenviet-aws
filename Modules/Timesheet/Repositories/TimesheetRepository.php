<?php

namespace Modules\Timesheet\Repositories;

use Auth;
use DB;
use Modules\Defect\Entities\Defect;
use Modules\Helper\Helpers\CommonHelper;
use Modules\Incident\Entities\Incident;
use Modules\Projects\Entities\Project;
use Modules\Task\Entities\Task;
use Modules\User\Entities\User\User;
use Modules\Timesheet\Entities\Timesheet;

/**
 * Class TimesheetRepository
 *
 * Timesheet create, update, delete and view.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Timesheet
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class TimesheetRepository
{
    protected $commonHelper;

    /**
     * Instantiate a new repository instance.
     *
     * @param CommonHelper $commonHelper [Object]
     *
     * @return void
     */
    public function __construct(CommonHelper $commonHelper)
    {
        $this->commonHelper = $commonHelper;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Object
     */
    public function findAll()
    {
        return Timesheet::with(
            ['user' => function ($query) {
                $query->select('id', 'firstname', 'lastname');
            }]
        )
            ->select(
                '*',
                DB::raw(
                    "TIME_FORMAT(TIMEDIFF(end_time, start_time), '%H:%i') as hours_time,
                (TIME_TO_SEC(TIMEDIFF( end_time, start_time ))/3600) as decimal_time"
                )
            )
            ->orderBy('decimal_time', 'asc')
            ->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get timesheets]
     *
     * @return array
     */

    public function getUserSelect(){
        $user = Auth::user();
        $department = DB::table('gv_user_role_department')->join('gv_departments', 'gv_departments.id', '=', 'gv_user_role_department.department_id')->join('gv_roles', 'gv_roles.id', '=', 'gv_user_role_department.role_id')->where('gv_user_role_department.user_id', $user->id)->select('gv_departments.name as department_name', 'gv_roles.name as role_name')->first();
        if($department->department_name == 'Administration' || $department->department_name == 'HR'){
            $data = User::with(['departments', 'roles'])
            ->where('is_client', false)
            ->get();
        }
        if($department->department_name == 'Project' && $department->role_name == 'Manager'){
            $listTeam = DB::table('gv_teams')->where('team_leader', 12)->pluck('id');
            $list = DB::table('gv_teams_members')->whereIn('team_id', $listTeam)->pluck('user_id');
            $data = User::with(['departments', 'roles'])
            ->where('is_client', false)
            ->whereIn('id', $list)
            ->get();
        }
        return ['data'=>$data, 'role'=>$department];
    }

    public function getTimesheetsCalendar($request){
        $input = $request->all();
        $user = Auth::user();
        if($input['user_id'] == 'my'){
            $input['user_id'] = $user->id;
        }
        $modules_table = config('core.acl.modules_table');
        $timesheet_table = config('core.acl.timesheets_table');
        $project_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meetings_table = config('core.acl.meetings');

        $timesheets = Timesheet::with(
            [
            'user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            ]
        )
            ->join($modules_table, $modules_table . '.module_id', '=', $timesheet_table . '.module_id')
            ->where($timesheet_table.'.created_user_id', '=',  $input['user_id'])
            ->where(function($query) use ($input) {
                $query->whereBetween('start_time', [$input['start'], $input['end']])
                      ->orWhereBetween('end_time', [$input['start'], $input['end']]);
            })->select(
                $timesheet_table . '.*',
                $modules_table . '.module_name',
                $task_table . '.name as related_name',
                $project_table . '.project_name'
            )
                ->join($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
                ->join($project_table, $project_table . '.id', '=', $task_table . '.project_id')
                ->orderBy($timesheet_table . '.id', 'desc')->get();
            $groupedTimesheets  = $timesheets->groupBy('module_related_id')->map(function ($row) {
                return [
                    'module_related_id' => $row->first()->module_related_id,
                    'module_name' => $row->first()->module_name,
                    'project_name' => $row->first()->project_name,
                    'related_name' => $row->first()->related_name,
                    'timesheets' => $row->map(function ($timesheet) {
                        return [
                            'id' => $timesheet->id,
                            'start_time' => $timesheet->start_time,
                            'decimal_time' => $timesheet->decimal_time,
                            'end_time' => $timesheet->end_time,
                        ];
                    })
                ];
            })->values();
        return  ['data'=>$groupedTimesheets];
    }
    public function getTimesheetsByModule($request)
    {
        $input = $request->all();
        $modules_table = config('core.acl.modules_table');
        $timesheet_table = config('core.acl.timesheets_table');
        $project_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meetings_table = config('core.acl.meetings');

        $timesheets = Timesheet::with(
            [
            'user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            ]
        )
            ->join($modules_table, $modules_table . '.module_id', '=', $timesheet_table . '.module_id');

        if (isset($input['module_id']) && isset($input['module_related_id'])) {
            if ($input['module_id'] == 2) {
                // Task
                $timesheets->select(
                    $timesheet_table . '.*',
                    $modules_table . '.module_name',
                    $task_table . '.name as related_name',
                    $project_table . '.project_name'
                )
                    ->join($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
                    ->join($project_table, $project_table . '.id', '=', $task_table . '.project_id');
            } elseif ($input['module_id'] == 3) {
                // Defect
                $timesheets->select(
                    $timesheet_table . '.*',
                    $modules_table . '.module_name',
                    $defects_table . '.defect_name as related_name'
                )
                    ->join($defects_table, $defects_table . '.id', '=', $timesheet_table . '.module_related_id');
            } elseif ($input['module_id'] == 4) {
                // Incident
                $timesheets->select(
                    $timesheet_table . '.*',
                    $modules_table . '.module_name',
                    $incidents_table . '.incident_name as related_name'
                )
                    ->join($incidents_table, $incidents_table . '.id', '=', $timesheet_table . '.module_related_id');
            } elseif ($input['module_id'] == 5) {
                // Meeting
                $timesheets->select(
                    $timesheet_table . '.*',
                    $modules_table . '.module_name',
                    $meetings_table . '.title as related_name'
                )
                    ->join($meetings_table, $meetings_table . '.id', '=', $timesheet_table . '.module_related_id');
            }

            $timesheets->where($timesheet_table . '.module_id', $input['module_id'])
                ->where($timesheet_table . '.module_related_id', $input['module_related_id']);
        }

        return $timesheets->orderBy($timesheet_table . '.id', 'desc')->get();
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get my timesheets]
     *
     * @return array
     */
    public function getMyTimesheets($request)
    {
        $user = Auth::user();
        $timesheet_table = config('core.acl.timesheets_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meeting_table = config('core.acl.meetings');
        $leaves_table = config('core.acl.leaves_table');

        $columns = array(
            0 => $projects_table . '.generated_id',
            1 => $timesheet_table . '.id',
            2 => $timesheet_table . '.note',
            3 => $timesheet_table . '.start_time',
            4 => $timesheet_table . '.end_time',
            5 => $timesheet_table . '.hour_time',
        );

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $timesheet = $user->timesheet()
            ->select(
                $timesheet_table . '.*',
                $projects_table . '.project_name',
                $task_table . '.name as task_name',
                $defects_table . '.defect_name',
                $incidents_table . '.incident_name',
                $meeting_table . '.title as meeting_title',
                $leaves_table . '.reason as leave_title',
                $projects_table . '.generated_id as project_generated_id',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id',
                $meeting_table . '.generated_id as meeting_generated_id'
            )
            ->leftjoin($projects_table, $projects_table . '.id', '=', $timesheet_table . '.project_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($meeting_table, $meeting_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($leaves_table, $leaves_table . '.id', '=', $timesheet_table . '.module_related_id');

        // Filter.
        if ($request->has('client_id') && !empty($request->input('client_id'))) {
            $timesheet->where($projects_table . '.client_id', $request->input('client_id'));
        }

        if ($request->has('project_ids') && !empty($request->input('project_ids'))) {
            $timesheet->whereIn($timesheet_table . '.project_id', $request->input('project_ids'));
        }

        if ($request->has('range') && !empty($request->input('range'))) {
            $range = $request->input('range');
            if ($range == 'today') {
                $filter_period = $this->commonHelper->getToday();
            } elseif ($range == 'this_month') {
                $filter_period = $this->commonHelper->getThisMonth();
            } elseif ($range == 'last_month') {
                $filter_period = $this->commonHelper->getLastMonth();
            } elseif ($range == 'this_week') {
                $filter_period = $this->commonHelper->getThisWeek();
            } elseif ($range == 'last_week') {
                $filter_period = $this->commonHelper->getLastWeek();
            } elseif ($range == 'period') {
                $filter_period = $this->commonHelper->convertPeriod($request->input('period_from'), $request->input('period_to'));
            }

            $timesheet->whereBetween($timesheet_table . '.start_time', [$filter_period['period_from'], $filter_period['period_to']]);
        }

        $totalData = $timesheet->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');
            $timesheet = $timesheet->where(
                function ($query) use ($search, $timesheet_table, $projects_table, $task_table, $defects_table, $incidents_table, $meeting_table, $leaves_table) {
                    $query->where($timesheet_table . '.start_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.end_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.note', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.hour_time', 'LIKE', "%{$search}%")
                        ->orWhere($projects_table . '.project_name', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.name', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.defect_name', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.incident_name', 'LIKE', "%{$search}%")
                        ->orWhere($meeting_table . '.title', 'LIKE', "%{$search}%")
                        ->orWhere($leaves_table . '.reason', 'LIKE', "%{$search}%")
                        ->orWhere($projects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($meeting_table . '.generated_id', 'LIKE', "%{$search}%");
                }
            );
            $totalFiltered = $timesheet->count();
        }

        $timesheet = $timesheet->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        $total['decimal_time'] = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
        $total['hour_time'] = $this->commonHelper->convertDecimalToTime($total['decimal_time']);

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $timesheet,
            "total" => $total,
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get timesheets report]
     *
     * @return array
     */
    public function getTimesheetsReport($request)
    {
        $user = Auth::user();
        $timesheet_table = config('core.acl.timesheets_table');
        $user_table = config('core.acl.users_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meeting_table = config('core.acl.meetings');
        $leaves_table = config('core.acl.leaves_table');

        $columns = array(
            0 => $user_table . '.firstname',
            1 => $projects_table . '.generated_id',
            2 => $timesheet_table . '.id',
            3 => $timesheet_table . '.note',
            4 => $timesheet_table . '.start_time',
            5 => $timesheet_table . '.end_time',
            6 => $timesheet_table . '.hour_time',
        );

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $timesheet = Timesheet::with(
            [
            'user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar');
            },
            ]
        )
            ->select(
                $timesheet_table . '.*',
                $projects_table . '.project_name',
                $task_table . '.name as task_name',
                $defects_table . '.defect_name',
                $incidents_table . '.incident_name',
                $meeting_table . '.title as meeting_title',
                $leaves_table . '.reason as leave_title',
                $projects_table . '.generated_id as project_generated_id',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id',
                $meeting_table . '.generated_id as meeting_generated_id'
            )
            ->join($user_table, $user_table . '.id', '=', $timesheet_table . '.created_user_id')
            ->leftjoin($projects_table, $projects_table . '.id', '=', $timesheet_table . '.project_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($meeting_table, $meeting_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($leaves_table, $leaves_table . '.id', '=', $timesheet_table . '.module_related_id');

        // Filter.
        if ($request->has('user_id') && !empty($request->input('user_id'))) {
            $timesheet->where($user_table . '.id', $request->input('user_id'));
        }

        if ($request->has('client_id') && !empty($request->input('client_id'))) {
            $timesheet->where($projects_table . '.client_id', $request->input('client_id'));
        }

        if ($request->has('project_ids') && !empty($request->input('project_ids'))) {
            $timesheet->whereIn($timesheet_table . '.project_id', $request->input('project_ids'));
        }

        if ($request->has('range') && !empty($request->input('range'))) {
            $range = $request->input('range');
            if ($range == 'today') {
                $filter_period = $this->commonHelper->getToday();
            } elseif ($range == 'this_month') {
                $filter_period = $this->commonHelper->getThisMonth();
            } elseif ($range == 'last_month') {
                $filter_period = $this->commonHelper->getLastMonth();
            } elseif ($range == 'this_week') {
                $filter_period = $this->commonHelper->getThisWeek();
            } elseif ($range == 'last_week') {
                $filter_period = $this->commonHelper->getLastWeek();
            } elseif ($range == 'period') {
                $filter_period = $this->commonHelper->convertPeriod($request->input('period_from'), $request->input('period_to'));
            }

            $timesheet->whereBetween($timesheet_table . '.start_time', [$filter_period['period_from'], $filter_period['period_to']]);
        }

        $totalData = $timesheet->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');
            $timesheet = $timesheet->where(
                function ($query) use ($search, $timesheet_table, $user_table, $projects_table, $task_table, $defects_table, $incidents_table, $meeting_table, $leaves_table) {
                    $query->where($timesheet_table . '.start_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.end_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.note', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.hour_time', 'LIKE', "%{$search}%")
                        ->orWhere($projects_table . '.project_name', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.name', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.defect_name', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.incident_name', 'LIKE', "%{$search}%")
                        ->orWhere($meeting_table . '.title', 'LIKE', "%{$search}%")
                        ->orWhere($leaves_table . '.reason', 'LIKE', "%{$search}%")
                        ->orWhere($projects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($meeting_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere(
                            DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'),
                            'LIKE',
                            "%{$search}%"
                        );
                }
            );
            $totalFiltered = $timesheet->count();
        }

        $timesheet = $timesheet->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        $total['decimal_time'] = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
        $total['hour_time'] = $this->commonHelper->convertDecimalToTime($total['decimal_time']);

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $timesheet,
            "total" => $total,
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request [Request for get project timesheets]
     *
     * @return array
     */
    public function getProjectTimesheets($request)
    {
        $timesheet_table = config('core.acl.timesheets_table');
        $user_table = config('core.acl.users_table');
        $projects_table = config('core.acl.projects_table');
        $task_table = config('core.acl.task_table');
        $defects_table = config('core.acl.defects_table');
        $incidents_table = config('core.acl.incidents_table');
        $meetings_table = config('core.acl.meetings');

        $columns = array(
            0 => $user_table . '.firstname',
            1 => $timesheet_table . '.id',
            2 => $timesheet_table . '.note',
            3 => $timesheet_table . '.start_time',
            4 => $timesheet_table . '.end_time',
            5 => $timesheet_table . '.hour_time',
        );

        $limit = $request->input('length');
        $start = $request->input('start');
        $order = $columns[$request->input('order.0.column')];
        $dir = $request->input('order.0.dir');

        $timesheet = Timesheet::with(
            [
            'user' => function ($query) {
                $query->select('id', 'firstname', 'lastname', 'avatar')->withTrashed();
            },
            ]
        )
            ->select(
                $timesheet_table . '.*',
                $task_table . '.name as task_name',
                $defects_table . '.defect_name',
                $incidents_table . '.incident_name',
                $meetings_table . '.title as meeting_title',
                $task_table . '.generated_id as task_generated_id',
                $defects_table . '.generated_id as defect_generated_id',
                $incidents_table . '.generated_id as incident_generated_id',
                $meetings_table . '.generated_id as meeting_generated_id'
            )
            ->join($user_table, $user_table . '.id', '=', $timesheet_table . '.created_user_id')
            ->leftjoin($task_table, $task_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($defects_table, $defects_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($incidents_table, $incidents_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->leftjoin($meetings_table, $meetings_table . '.id', '=', $timesheet_table . '.module_related_id')
            ->where($timesheet_table . '.project_id', $request->input('project_ids'));

        // Filter.
        if ($request->has('user_id') && !empty($request->input('user_id'))) {
            $timesheet->where($user_table . '.id', $request->input('user_id'));
        }

        $totalData = $timesheet->count();
        $totalFiltered = $totalData;

        if (!empty($request->input('search.value'))) {
            $search = $request->input('search.value');
            $timesheet = $timesheet->where(
                function ($query) use ($search, $timesheet_table, $user_table, $task_table, $defects_table, $incidents_table) {
                    $query->where($timesheet_table . '.start_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.end_time', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.note', 'LIKE', "%{$search}%")
                        ->orWhere($timesheet_table . '.hour_time', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.name', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.defect_name', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.incident_name', 'LIKE', "%{$search}%")
                        ->orWhere($meetings_table . '.title', 'LIKE', "%{$search}%")
                        ->orWhere($task_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($defects_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($incidents_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere($meetings_table . '.generated_id', 'LIKE', "%{$search}%")
                        ->orWhere(
                            DB::raw('concat(' . $user_table . '.firstname," ",' . $user_table . '.lastname)'),
                            'LIKE',
                            "%{$search}%"
                        );
                }
            );
            $totalFiltered = $timesheet->count();
        }

        $timesheet = $timesheet->offset($start)
            ->limit($limit)
            ->orderBy($order, $dir === 'asc' ? 'asc' : 'desc')
            ->get();

        $total['decimal_time'] = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
        $total['hour_time'] = $this->commonHelper->convertDecimalToTime($total['decimal_time']);

        return array(
            "draw" => intval($request->input('draw')),
            "recordsTotal" => intval($totalData),
            "recordsFiltered" => intval($totalFiltered),
            "data" => $timesheet,
            "total" => $total,
        );
    }


    public function disapprovedTimesheet($request){
        $user = Auth::user();
        $input = $request->all();
        foreach($input as $value){
            // if($user->is_super_admin){

            // } else {
                if($value['id']){
                    $timesheet = Timesheet::findOrFail($value['id']);
                    $contract = DB::table('gv_users_contract')->where('user_id', $user->id)->where('start_date', '<', date('y-m-d', strtotime($timesheet->start)))->where('end_date', '>', date('y-m-d', strtotime($timesheet->end)))->orderBy('id', 'desc')->first();
                    if($contract){
                        $dayInMonth = $this->getWeekdaysInMonthFromDate($timesheet->start_date);
                        $cost = round($contract->salary/$dayInMonth)*($timesheet->decimal_time/8);
                        // $timesheet = Timesheet::findOrFail($timesheet->id);
                        if(is_null($timesheet->approved2)){
                            $data = ['dis_approved'=>$user->id, 'cost'=>$cost];
                            $timesheet->fill($data);
                            $timesheet->save();
                        }
                    }
                }
            // }
        }
        return true;
    }

    public function approvedTimesheet($request){
        $user = Auth::user();
        $input = $request->all();
        foreach($input as $value){
            // if($user->is_super_admin){

            // } else {
                if($value['id']){
                    $timesheet = Timesheet::findOrFail($value['id']);
                    $contract = DB::table('gv_users_contract')->where('user_id', $user->id)->where('start_date', '<', date('y-m-d', strtotime($timesheet->start)))->where('end_date', '>', date('y-m-d', strtotime($timesheet->end)))->orderBy('id', 'desc')->first();
                    if($contract){
                        $dayInMonth = $this->getWeekdaysInMonthFromDate($timesheet->start_date);
                        $cost = round($contract->salary/$dayInMonth)*($timesheet->decimal_time/8);
                        $timesheet = Timesheet::findOrFail($timesheet->id);
                        if($timesheet->approved1 > 0){
                            $data = ['approved2'=>$user->id, 'cost'=>$cost];
                        } else {
                            $data = ['approved1'=>$user->id, 'cost'=>$cost];
                        }
                        $timesheet->fill();
                        $timesheet->save();
                    }
                }
            // }
        }
        return true;
    }
    public function getWeekdaysInMonthFromDate($date) {
        $timestamp = strtotime($date);
        $month = date('m', $timestamp);
        $year = date('Y', $timestamp);

        $totalDays = cal_days_in_month(CAL_GREGORIAN, $month, $year);
        $weekdays = 0;

        for ($day = 1; $day <= $totalDays; $day++) {
            $currentDate = sprintf('%04d-%02d-%02d', $year, $month, $day);
            $dayOfWeek = date('N', strtotime($currentDate));

            if ($dayOfWeek < 6) {
                $weekdays++;
            }
        }

        return $weekdays;
    }

    public function updateCost($timesheet){
        $user = Auth::user();
        $contract = DB::table('gv_users_contract')
            ->where('user_id', $user->id)
            ->where('start_date', '<', $timesheet->start_time)
            ->where('end_date', '>=', $timesheet->start_time)
            ->orderBy('id', 'desc')->first();
        if($contract){
            $dayInMonth = $this->getWeekdaysInMonthFromDate($timesheet->start_time);
            $cost = round($contract->salary/$dayInMonth)*($timesheet->decimal_time/8);
            $timesheet = Timesheet::findOrFail($timesheet->id);
            $timesheet->fill(['cost'=>$cost]);
            $timesheet->save();
            DB::table('gv_users_contract')->where('id', $contract->id)->update(['status'=> 1]);
        } else {
            return 0;
        }
        return true;
    }
    public function saveTimesheet($request){
        $user = Auth::user();
        $input = $request->all();
        // Timesheet::whereIn('id', $input['removeData'])->delete();
        Timesheet::where('start_time', '>=', date('y-m-d H:i:s', strtotime($input['rangeDate']['start']. ' 00:00:00')))->where('start_time', '<', date('y-m-d H:i:s', strtotime($input['rangeDate']['end']. ' 23:59:59')))->where('created_user_id', $user->id)->delete();

        foreach($input['data'] as $value){
            $data = [];
            $data['project_id'] = Project::join('gv_tasks', 'gv_projects.id', '=',  'gv_tasks.project_id')->where('gv_tasks.id', $value['task_id'])->pluck('gv_projects.id')[0];
            $data['created_user_id'] = $user->id;
            $data['start_time'] = $value['start_time'];
            $data['end_time'] = $value['end_time'];
            $data['decimal_time'] = $this->commonHelper->getDecimalTimeDiff($value['start_time'], $value['end_time']);
            $data['hour_time'] = $this->commonHelper->getHourTimeDiff($value['start_time'], $value['end_time']);
            $data['module_id'] = 2;
            $data['module_related_id'] = $value['task_id'];
            if(!isset($value['id']) || !($value['id'])){
                $timesheet = new Timesheet;
                $timesheet->fill($data);
                if ($timesheet->save()) {
                    if (!empty($timesheet->module_related_id)) {

                        // Update project actual hours.
                        if ($timesheet->project_id) {
                            $this->_updateProject($timesheet->project_id);
                        }

                        // Update task, defect, incident start date, end date and actual hours.
                        if (in_array($timesheet->module_id, [2, 3, 4])) {
                            $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                            $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                            if ($timesheet->module_id == 2) {
                                $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                            }
                        }
                    }
                    $this->updateCost($timesheet);
                    // --
                    // Add activities.
                    createUserActivity(
                        Timesheet::MODULE_NAME,
                        $timesheet->id,
                        $request->method(),
                        $timesheet->note,
                        $request->ip()
                    );
                }
            } else {
                $timesheet = Timesheet::findOrFail($value['id']);
                $timesheet->fill($data);
                if ($timesheet->save()) {
                    if (!empty($timesheet->module_related_id)) {

                        // Update project actual hours.
                        if ($timesheet->project_id) {
                            $this->_updateProject($timesheet->project_id);
                        }

                        // Update task, defect, incident start date, end date and actual hours.
                        if (in_array($timesheet->module_id, [2, 3, 4])) {
                            $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                            $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                            if ($timesheet->module_id == 2) {
                                $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                            }
                        }
                    }
                    $this->updateCost($timesheet);
                    // --
                    // Add activities
                    createUserActivity(
                        Timesheet::MODULE_NAME,
                        $timesheet->id,
                        $request->method(),
                        $timesheet->note,
                        $request->ip()
                    );
                }
            }
        }

        return true;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request    [Request for create timesheet]
     * @param Array   $inputArray [Input array for create timesheet]
     *
     * @return Boolean
     */
    public function create($request, $inputArray = [])
    {
        $user = Auth::user();
        $timesheet = new Timesheet;

        if (!empty($inputArray)) {
            $input = $inputArray;
        } else {
            $input = $request->all();
        }

        $input['created_user_id'] = $user->id;
        $input['decimal_time'] = $this->commonHelper->getDecimalTimeDiff($input['start_time'], $input['end_time']);
        $input['hour_time'] = $this->commonHelper->getHourTimeDiff($input['start_time'], $input['end_time']);
        $timesheet->fill($input);
        if ($timesheet->save()) {
            if (!empty($timesheet->module_related_id)) {

                // Update project actual hours.
                if ($timesheet->project_id) {
                    $this->_updateProject($timesheet->project_id);
                }

                // Update task, defect, incident start date, end date and actual hours.
                if (in_array($timesheet->module_id, [2, 3, 4])) {
                    $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                    $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                    if ($timesheet->module_id == 2) {
                        // Task...
                        $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 3) {
                        // Defect...
                        $this->_updateDefect($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 4) {
                        // Incident...
                        $this->_updateIncident($timesheet->module_related_id, $date, $total_hours);
                    }
                }
            }

            // --
            // Add activities.
            createUserActivity(
                Timesheet::MODULE_NAME,
                $timesheet->id,
                $request->method(),
                $timesheet->note,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request [Request for update timesheet]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function update($request, $id)
    {
        $input = $request->all();
        $timesheet = Timesheet::findOrFail($id);
        $input['decimal_time'] = $this->commonHelper->getDecimalTimeDiff($input['start_time'], $input['end_time']);
        $input['hour_time'] = $this->commonHelper->getHourTimeDiff($input['start_time'], $input['end_time']);
        $timesheet->fill($input);
        if ($timesheet->save()) {
            if (!empty($timesheet->module_related_id)) {

                // Update project actual hours.
                if ($timesheet->project_id) {
                    $this->_updateProject($timesheet->project_id);
                }

                // Update task, defect, incident start date, end date and actual hours.
                if (in_array($timesheet->module_id, [2, 3, 4])) {
                    $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                    $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                    if ($timesheet->module_id == 2) {
                        // Task...
                        $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 3) {
                        // Defect...
                        $this->_updateDefect($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 4) {
                        // Incident...
                        $this->_updateIncident($timesheet->module_related_id, $date, $total_hours);
                    }
                }
            }

            // --
            // Add activities
            createUserActivity(
                Timesheet::MODULE_NAME,
                $timesheet->id,
                $request->method(),
                $timesheet->note,
                $request->ip()
            );
            return true;
        }
        return false;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request [Request for delete timesheet]
     * @param Int     $id      [Row id]
     *
     * @return Boolean
     */
    public function delete($request, $id)
    {
        $timesheet = Timesheet::findOrFail($id);
        if ($timesheet->delete()) {
            if (!empty($timesheet->module_related_id)) {

                // Update project actual hours.
                if ($timesheet->project_id) {
                    $this->_updateProject($timesheet->project_id);
                }

                // Update task, defect, incident start date, end date and actual hours.
                if (in_array($timesheet->module_id, [2, 3, 4])) {
                    $date = $this->_getStartEndDate($timesheet->module_id, $timesheet->module_related_id);
                    $total_hours = $this->_getTotalHours($timesheet->module_id, $timesheet->module_related_id);

                    if ($timesheet->module_id == 2) {
                        // Task...
                        $this->_updateTask($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 3) {
                        // Defect...
                        $this->_updateDefect($timesheet->module_related_id, $date, $total_hours);
                    } elseif ($timesheet->module_id == 4) {
                        // Incident...
                        $this->_updateIncident($timesheet->module_related_id, $date, $total_hours);
                    }
                }
            }
            // --
            // Add activities
            createUserActivity(
                Timesheet::MODULE_NAME,
                $timesheet->id,
                $request->method(),
                $timesheet->note,
                $request->ip()
            );
            return true;
        } else {
            return false;
        }
    }

    /**
     * Get min and max date.
     *
     * @param Int $module_id         [Module id]
     * @param Int $module_related_id [Module related id]
     *
     * @return array
     */
    private function _getStartEndDate($module_id, $module_related_id)
    {
        $first = Timesheet::where('module_id', $module_id)
            ->where('module_related_id', $module_related_id)
            ->orderBy('start_time', 'asc')
            ->first();

        $last = Timesheet::where('module_id', $module_id)
            ->where('module_related_id', $module_related_id)
            ->orderBy('end_time', 'desc')
            ->first();

        return [
            'start_time' => empty($first) ? null : $first->start_time,
            'end_time' => empty($last) ? null : $last->end_time,
        ];
    }

    /**
     * Get specific task, defect, incident total hours.
     *
     * @param Int $module_id         [Module id]
     * @param Int $module_related_id [Module related id]
     *
     * @return array
     */
    private function _getTotalHours($module_id, $module_related_id)
    {
        // $total_hours = Timesheet::selectRaw('module_related_id,TIME_FORMAT(time(sum(TIMEDIFF( end_time, start_time ))),"%H:%i") as total')
        //     ->where('module_id', $module_id)
        //     ->where('module_related_id', $module_related_id)
        //     ->groupBy('module_related_id')
        //     ->first();
        // return empty($total_hours) ? null : $total_hours->total;

        $timesheet = Timesheet::where('module_id', $module_id)
            ->where('module_related_id', $module_related_id)
            ->get();
        $decimal_time = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
        return $this->commonHelper->convertDecimalToTime($decimal_time);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Int $project_id [Project id]
     *
     * @return void
     */
    private function _updateProject($project_id)
    {
        // DB::enableQueryLog();
        // $total_hours = Timesheet::selectRaw('project_id,TIME_FORMAT(time(sum(TIMEDIFF( end_time, start_time ))),"%H:%i") as total')
        //     ->where('project_id', $project_id)
        //     ->groupBy('project_id')
        //     ->first();
        // $query = DB::getQueryLog();
        // print_r($query);

        $project = Project::find($project_id);
        if ($project) {

            $timesheet = Timesheet::where('project_id', $project_id)->get();
            $decimal_time = array_sum(array_column($timesheet->toArray(), 'decimal_time'));
            $cost = array_sum(array_column($timesheet->toArray(), 'cost'));
            $actual_hours = $this->commonHelper->convertDecimalToTime($decimal_time);

            $project->cost = $cost;
            $project->save();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Int    $module_related_id [Task id]
     * @param Array  $date              [Update date]
     * @param String $total_hours       [Total hours]
     *
     * @return void
     */
    private function _updateTask($module_related_id, $date, $total_hours)
    {
        $task = Task::find($module_related_id);
        if ($task) {
            $task->cost = Timesheet::where('module_id', 2)->where('module_related_id', $task->id)->sum('cost');
            $task->task_start_date = $date['start_time'];
            $task->task_end_date = $date['end_time'];
            $task->actual_hours = $total_hours;
            $task->save();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Int    $module_related_id [Task id]
     * @param Array  $date              [Update date]
     * @param String $total_hours       [Total hours]
     *
     * @return void
     */
    private function _updateDefect($module_related_id, $date, $total_hours)
    {
        $defect = Defect::find($module_related_id);
        if ($defect) {
            $defect->start_date = $date['start_time'];
            $defect->end_date = $date['end_time'];
            $defect->actual_hours = $total_hours;
            $defect->save();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Int    $module_related_id [Task id]
     * @param Array  $date              [Update date]
     * @param String $total_hours       [Total hours]
     *
     * @return void
     */
    private function _updateIncident($module_related_id, $date, $total_hours)
    {
        $incident = Incident::find($module_related_id);
        if ($incident) {
            $incident->start_date = $date['start_time'];
            $incident->end_date = $date['end_time'];
            $incident->actual_hours = $total_hours;
            $incident->save();
        }
    }

    /**
     * Check user permission.
     *
     * @param Int $timesheet_id [Timesheet Id]
     *
     * @return Boolean
     */
    public function checkPermission($timesheet_id)
    {
        $user = Auth::user();
        if ($user->hasRole('admin') || $user->is_super_admin) {
            return true;
        } else {
            $timesheet = Timesheet::where('id', $timesheet_id)
                ->where('created_user_id', $user->id)
                ->first();

            if ($timesheet) {
                return true;
            }
        }
        return false;
    }
}
