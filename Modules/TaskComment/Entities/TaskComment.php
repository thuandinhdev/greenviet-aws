<?php

namespace Modules\TaskComment\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\TaskComment\Entities\Relationship\TaskCommentRelationship;

/**
 * Class TaskComment
 *
 * The Model is Defined for Task Comment.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\TaskComment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class TaskComment extends Model
{
    use SoftDeletes, TaskCommentRelationship;

    const MODULE_NAME = 'TaskComment';

    /**
     * The table associated with the model..
     *
     * @var string
     */
    protected $table;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'task_id',
        'parent_id',
        'comment',
        'attachments',
    ];

    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * Instantiate a new model instance.
     *
     * @param Array $attributes [object]
     *
     * @return void
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->table = config('core.acl.task_comments_table');
    }
}
