<?php

namespace Modules\Task\Http\Requests;

use App\Rules\EstimatedHours;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

/**
 * Class CreateTaskRequest
 *
 * The Validation Rules is Defined for Task.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\Task
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class CreateTaskRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        $rules = [
            'name' => [
                'required',
                'max:' . config('core.max_length'),
            ],
            'project_id' => 'required',
            'planned_start_date' => 'nullable|date',
            'planned_end_date' => 'nullable|date|after_or_equal:planned_start_date',
            'task_start_date' => 'nullable|date',
            'task_end_date' => 'nullable|date|after_or_equal:task_start_date',
            'status' => 'required',
            'priority' => 'required',
            // 'estimated_hours' => ['nullable', new EstimatedHours],
        ];

        return $rules;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
