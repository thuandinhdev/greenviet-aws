<?php

namespace Modules\IncidentComment\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

/**
 * Class IncidentCommentDatabaseSeeder
 *
 * The Migrations is Defined for IncidentComment.
 *
 * PHP version 8.0
 *
 * @category  PM
 * @package   Modules\IncidentComment
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class IncidentCommentDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call("OthersTableSeeder");
    }
}
