<?php

namespace Modules\Installer\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Installer\Helpers\RequirementsChecker;

/**
 * Class RequirementsController
 *
 * Requirements check permission for bootstrap and storage.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Installer
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class RequirementsController extends Controller
{
    protected $requirements;

    /**
     * Instantiate a new controller instance.
     *
     * @param RequirementsChecker $checker [Object]
     *
     * @return void
     */
    public function __construct(RequirementsChecker $checker)
    {
        $this->requirements = $checker;
    }

    /**
     * Display the requirements page.
     *
     * @return View
     */
    public function requirements()
    {
        $configs = getConfigs();
        $phpSupportInfo = $this->requirements->checkPHPversion(
            $configs['core']['minPhpVersion']
        );
        $requirements = $this->requirements->check($configs['requirements']);

        \View::addLocation(base_path() . '/Modules/Installer/Resources/views');
        \View::addNamespace('theme', base_path() . '/Modules/Installer/Resources/views');
        return \View::make(
            'theme::requirements',
            compact('requirements', 'phpSupportInfo')
        );
    }
}
