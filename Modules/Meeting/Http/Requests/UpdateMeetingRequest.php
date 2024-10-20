<?php

namespace Modules\Meeting\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateMeetingRequest
 *
 * The Validation Rules is Defined for Update Meeting.
 *
 * PHP version 8.0
 *
 * @category  Administration
 * @package   Modules\Meeting
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2019 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @1.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 1.0
 */
class UpdateMeetingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:'.config('core.max_length'),
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'members' => 'required'
        ];
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
