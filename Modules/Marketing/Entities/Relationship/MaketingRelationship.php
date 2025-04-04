<?php

namespace Modules\Marketing\Entities\Relationship;

use Modules\User\Entities\User\User;

/**
 * Trait MarketingRelationship
 *
 * The Relationship is Defined For Marketing.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Marketing
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
trait MarketingRelationship
{
    /**
     * Many-to-Many relations with user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function assigned()
    {
        return $this->belongsToMany(
            config('core.acl.user'),
            config('gv_marketing'),
            'todo_id',
            'user_id'
        );
    }
}
