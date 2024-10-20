<?php

namespace Modules\Helper\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use DB;

/**
 * Class CountryDatabaseTableSeeder
 *
 * The Seeder is Defined for Countries.
 *
 * PHP version 8.0
 *
 * @category  Helper
 * @package   Modules\Helper
 * @author    Vipul Patel <vipul@chetsapp.com>
 * @copyright 2020 Chetsapp Group
 * @license   Chetsapp Private Limited
 * @version   Release: @2.0@
 * @link      https://www.chetsapp.com
 * @since     Class available since Release 2.0
 */
class CountryDatabaseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // --
        // Insert Countries
        DB::table(config('core.acl.countries_table'))->truncate();
        $data = [
            ["code" => "AF", "name" => "Afghanistan"],
            ["code" => "AL", "name" => "Albania"],
            ["code" => "DZ", "name" => "Algeria"],
            ["code" => "AS", "name" => "American Samoa"],
            ["code" => "AD", "name" => "Andorra"],
            ["code" => "AO", "name" => "Angola"],
            ["code" => "AI", "name" => "Anguilla"],
            ["code" => "AQ", "name" => "Antarctica"],
            ["code" => "AG", "name" => "Antigua and Barbuda"],
            ["code" => "AR", "name" => "Argentina"],
            ["code" => "AM", "name" => "Armenia"],
            ["code" => "AW", "name" => "Aruba"],
            ["code" => "AU", "name" => "Australia"],
            ["code" => "AT", "name" => "Austria"],
            ["code" => "AZ", "name" => "Azerbaijan"],
            ["code" => "BS", "name" => "Bahamas"],
            ["code" => "BH", "name" => "Bahrain"],
            ["code" => "BD", "name" => "Bangladesh"],
            ["code" => "BB", "name" => "Barbados"],
            ["code" => "BY", "name" => "Belarus"],
            ["code" => "BE", "name" => "Belgium"],
            ["code" => "BZ", "name" => "Belize"],
            ["code" => "BJ", "name" => "Benin"],
            ["code" => "BM", "name" => "Bermuda"],
            ["code" => "BT", "name" => "Bhutan"],
            ["code" => "BO", "name" => "Bolivia"],
            ["code" => "BA", "name" => "Bosnia and Herzegovina"],
            ["code" => "BW", "name" => "Botswana"],
            ["code" => "BV", "name" => "Bouvet Island"],
            ["code" => "BR", "name" => "Brazil"],
            ["code" => "BQ", "name" => "British Antarctic Territory"],
            ["code" => "IO", "name" => "British Indian Ocean Territory"],
            ["code" => "VG", "name" => "British Virgin Islands"],
            ["code" => "BN", "name" => "Brunei"],
            ["code" => "BG", "name" => "Bulgaria"],
            ["code" => "BF", "name" => "Burkina Faso"],
            ["code" => "BI", "name" => "Burundi"],
            ["code" => "KH", "name" => "Cambodia"],
            ["code" => "CM", "name" => "Cameroon"],
            ["code" => "CA", "name" => "Canada"],
            ["code" => "CT", "name" => "Canton and Enderbury Islands"],
            ["code" => "CV", "name" => "Cape Verde"],
            ["code" => "KY", "name" => "Cayman Islands"],
            ["code" => "CF", "name" => "Central African Republic"],
            ["code" => "TD", "name" => "Chad"],
            ["code" => "CL", "name" => "Chile"],
            ["code" => "CN", "name" => "China"],
            ["code" => "CX", "name" => "Christmas Island"],
            ["code" => "CC", "name" => "Cocos [Keeling] Islands"],
            ["code" => "CO", "name" => "Colombia"],
            ["code" => "KM", "name" => "Comoros"],
            ["code" => "CG", "name" => "Congo - Brazzaville"],
            ["code" => "CD", "name" => "Congo - Kinshasa"],
            ["code" => "CK", "name" => "Cook Islands"],
            ["code" => "CR", "name" => "Costa Rica"],
            ["code" => "HR", "name" => "Croatia"],
            ["code" => "CU", "name" => "Cuba"],
            ["code" => "CY", "name" => "Cyprus"],
            ["code" => "CZ", "name" => "Czech Republic"],
            ["code" => "CI", "name" => "Côte d’Ivoire"],
            ["code" => "DK", "name" => "Denmark"],
            ["code" => "DJ", "name" => "Djibouti"],
            ["code" => "DM", "name" => "Dominica"],
            ["code" => "DO", "name" => "Dominican Republic"],
            ["code" => "NQ", "name" => "Dronning Maud Land"],
            ["code" => "DD", "name" => "East Germany"],
            ["code" => "EC", "name" => "Ecuador"],
            ["code" => "EG", "name" => "Egypt"],
            ["code" => "SV", "name" => "El Salvador"],
            ["code" => "GQ", "name" => "Equatorial Guinea"],
            ["code" => "ER", "name" => "Eritrea"],
            ["code" => "EE", "name" => "Estonia"],
            ["code" => "ET", "name" => "Ethiopia"],
            ["code" => "FK", "name" => "Falkland Islands"],
            ["code" => "FO", "name" => "Faroe Islands"],
            ["code" => "FJ", "name" => "Fiji"],
            ["code" => "FI", "name" => "Finland"],
            ["code" => "FR", "name" => "France"],
            ["code" => "GF", "name" => "French Guiana"],
            ["code" => "PF", "name" => "French Polynesia"],
            ["code" => "TF", "name" => "French Southern Territories"],
            ["code" => "FQ", "name" => "French Southern and Antarctic Territories"],
            ["code" => "GA", "name" => "Gabon"],
            ["code" => "GM", "name" => "Gambia"],
            ["code" => "GE", "name" => "Georgia"],
            ["code" => "DE", "name" => "Germany"],
            ["code" => "GH", "name" => "Ghana"],
            ["code" => "GI", "name" => "Gibraltar"],
            ["code" => "GR", "name" => "Greece"],
            ["code" => "GL", "name" => "Greenland"],
            ["code" => "GD", "name" => "Grenada"],
            ["code" => "GP", "name" => "Guadeloupe"],
            ["code" => "GU", "name" => "Guam"],
            ["code" => "GT", "name" => "Guatemala"],
            ["code" => "GG", "name" => "Guernsey"],
            ["code" => "GN", "name" => "Guinea"],
            ["code" => "GW", "name" => "Guinea-Bissau"],
            ["code" => "GY", "name" => "Guyana"],
            ["code" => "HT", "name" => "Haiti"],
            ["code" => "HM", "name" => "Heard Island and McDonald Islands"],
            ["code" => "HN", "name" => "Honduras"],
            ["code" => "HK", "name" => "Hong Kong SAR China"],
            ["code" => "HU", "name" => "Hungary"],
            ["code" => "IS", "name" => "Iceland"],
            ["code" => "IN", "name" => "India"],
            ["code" => "ID", "name" => "Indonesia"],
            ["code" => "IR", "name" => "Iran"],
            ["code" => "IQ", "name" => "Iraq"],
            ["code" => "IE", "name" => "Ireland"],
            ["code" => "IM", "name" => "Isle of Man"],
            ["code" => "IL", "name" => "Israel"],
            ["code" => "IT", "name" => "Italy"],
            ["code" => "JM", "name" => "Jamaica"],
            ["code" => "JP", "name" => "Japan"],
            ["code" => "JE", "name" => "Jersey"],
            ["code" => "JT", "name" => "Johnston Island"],
            ["code" => "JO", "name" => "Jordan"],
            ["code" => "KZ", "name" => "Kazakhstan"],
            ["code" => "KE", "name" => "Kenya"],
            ["code" => "KI", "name" => "Kiribati"],
            ["code" => "KW", "name" => "Kuwait"],
            ["code" => "KG", "name" => "Kyrgyzstan"],
            ["code" => "LA", "name" => "Laos"],
            ["code" => "LV", "name" => "Latvia"],
            ["code" => "LB", "name" => "Lebanon"],
            ["code" => "LS", "name" => "Lesotho"],
            ["code" => "LR", "name" => "Liberia"],
            ["code" => "LY", "name" => "Libya"],
            ["code" => "LI", "name" => "Liechtenstein"],
            ["code" => "LT", "name" => "Lithuania"],
            ["code" => "LU", "name" => "Luxembourg"],
            ["code" => "MO", "name" => "Macau SAR China"],
            ["code" => "MK", "name" => "Macedonia"],
            ["code" => "MG", "name" => "Madagascar"],
            ["code" => "MW", "name" => "Malawi"],
            ["code" => "MY", "name" => "Malaysia"],
            ["code" => "MV", "name" => "Maldives"],
            ["code" => "ML", "name" => "Mali"],
            ["code" => "MT", "name" => "Malta"],
            ["code" => "MH", "name" => "Marshall Islands"],
            ["code" => "MQ", "name" => "Martinique"],
            ["code" => "MR", "name" => "Mauritania"],
            ["code" => "MU", "name" => "Mauritius"],
            ["code" => "YT", "name" => "Mayotte"],
            ["code" => "FX", "name" => "Metropolitan France"],
            ["code" => "MX", "name" => "Mexico"],
            ["code" => "FM", "name" => "Micronesia"],
            ["code" => "MI", "name" => "Midway Islands"],
            ["code" => "MD", "name" => "Moldova"],
            ["code" => "MC", "name" => "Monaco"],
            ["code" => "MN", "name" => "Mongolia"],
            ["code" => "ME", "name" => "Montenegro"],
            ["code" => "MS", "name" => "Montserrat"],
            ["code" => "MA", "name" => "Morocco"],
            ["code" => "MZ", "name" => "Mozambique"],
            ["code" => "MM", "name" => "Myanmar [Burma]"],
            ["code" => "NA", "name" => "Namibia"],
            ["code" => "NR", "name" => "Nauru"],
            ["code" => "NP", "name" => "Nepal"],
            ["code" => "NL", "name" => "Netherlands"],
            ["code" => "AN", "name" => "Netherlands Antilles"],
            ["code" => "NT", "name" => "Neutral Zone"],
            ["code" => "NC", "name" => "New Caledonia"],
            ["code" => "NZ", "name" => "New Zealand"],
            ["code" => "NI", "name" => "Nicaragua"],
            ["code" => "NE", "name" => "Niger"],
            ["code" => "NG", "name" => "Nigeria"],
            ["code" => "NU", "name" => "Niue"],
            ["code" => "NF", "name" => "Norfolk Island"],
            ["code" => "KP", "name" => "North Korea"],
            ["code" => "VD", "name" => "North Vietnam"],
            ["code" => "MP", "name" => "Northern Mariana Islands"],
            ["code" => "NO", "name" => "Norway"],
            ["code" => "OM", "name" => "Oman"],
            ["code" => "PC", "name" => "Pacific Islands Trust Territory"],
            ["code" => "PK", "name" => "Pakistan"],
            ["code" => "PW", "name" => "Palau"],
            ["code" => "PS", "name" => "Palestinian Territories"],
            ["code" => "PA", "name" => "Panama"],
            ["code" => "PZ", "name" => "Panama Canal Zone"],
            ["code" => "PG", "name" => "Papua New Guinea"],
            ["code" => "PY", "name" => "Paraguay"],
            ["code" => "YD", "name" => "People's Democratic Republic of Yemen"],
            ["code" => "PE", "name" => "Peru"],
            ["code" => "PH", "name" => "Philippines"],
            ["code" => "PN", "name" => "Pitcairn Islands"],
            ["code" => "PL", "name" => "Poland"],
            ["code" => "PT", "name" => "Portugal"],
            ["code" => "PR", "name" => "Puerto Rico"],
            ["code" => "QA", "name" => "Qatar"],
            ["code" => "RO", "name" => "Romania"],
            ["code" => "RU", "name" => "Russia"],
            ["code" => "RW", "name" => "Rwanda"],
            ["code" => "RE", "name" => "Réunion"],
            ["code" => "BL", "name" => "Saint Barthélemy"],
            ["code" => "SH", "name" => "Saint Helena"],
            ["code" => "KN", "name" => "Saint Kitts and Nevis"],
            ["code" => "LC", "name" => "Saint Lucia"],
            ["code" => "MF", "name" => "Saint Martin"],
            ["code" => "PM", "name" => "Saint Pierre and Miquelon"],
            ["code" => "VC", "name" => "Saint Vincent and the Grenadines"],
            ["code" => "WS", "name" => "Samoa"],
            ["code" => "SM", "name" => "San Marino"],
            ["code" => "SA", "name" => "Saudi Arabia"],
            ["code" => "SN", "name" => "Senegal"],
            ["code" => "RS", "name" => "Serbia"],
            ["code" => "CS", "name" => "Serbia and Montenegro"],
            ["code" => "SC", "name" => "Seychelles"],
            ["code" => "SL", "name" => "Sierra Leone"],
            ["code" => "SG", "name" => "Singapore"],
            ["code" => "SK", "name" => "Slovakia"],
            ["code" => "SI", "name" => "Slovenia"],
            ["code" => "SB", "name" => "Solomon Islands"],
            ["code" => "SO", "name" => "Somalia"],
            ["code" => "ZA", "name" => "South Africa"],
            ["code" => "GS", "name" => "South Georgia and the South Sandwich Islands"],
            ["code" => "KR", "name" => "South Korea"],
            ["code" => "ES", "name" => "Spain"],
            ["code" => "LK", "name" => "Sri Lanka"],
            ["code" => "SD", "name" => "Sudan"],
            ["code" => "SR", "name" => "Suriname"],
            ["code" => "SJ", "name" => "Svalbard and Jan Mayen"],
            ["code" => "SZ", "name" => "Swaziland"],
            ["code" => "SE", "name" => "Sweden"],
            ["code" => "CH", "name" => "Switzerland"],
            ["code" => "SY", "name" => "Syria"],
            ["code" => "ST", "name" => "São Tomé and Príncipe"],
            ["code" => "TW", "name" => "Taiwan"],
            ["code" => "TJ", "name" => "Tajikistan"],
            ["code" => "TZ", "name" => "Tanzania"],
            ["code" => "TH", "name" => "Thailand"],
            ["code" => "TL", "name" => "Timor-Leste"],
            ["code" => "TG", "name" => "Togo"],
            ["code" => "TK", "name" => "Tokelau"],
            ["code" => "TO", "name" => "Tonga"],
            ["code" => "TT", "name" => "Trinidad and Tobago"],
            ["code" => "TN", "name" => "Tunisia"],
            ["code" => "TR", "name" => "Turkey"],
            ["code" => "TM", "name" => "Turkmenistan"],
            ["code" => "TC", "name" => "Turks and Caicos Islands"],
            ["code" => "TV", "name" => "Tuvalu"],
            ["code" => "UM", "name" => "U.S. Minor Outlying Islands"],
            ["code" => "PU", "name" => "U.S. Miscellaneous Pacific Islands"],
            ["code" => "VI", "name" => "U.S. Virgin Islands"],
            ["code" => "UG", "name" => "Uganda"],
            ["code" => "UA", "name" => "Ukraine"],
            ["code" => "SU", "name" => "Union of Soviet Socialist Republics"],
            ["code" => "AE", "name" => "United Arab Emirates"],
            ["code" => "GB", "name" => "United Kingdom"],
            ["code" => "US", "name" => "United States"],
            ["code" => "ZZ", "name" => "Unknown or Invalid Region"],
            ["code" => "UY", "name" => "Uruguay"],
            ["code" => "UZ", "name" => "Uzbekistan"],
            ["code" => "VU", "name" => "Vanuatu"],
            ["code" => "VA", "name" => "Vatican City"],
            ["code" => "VE", "name" => "Venezuela"],
            ["code" => "VN", "name" => "Vietnam"],
            ["code" => "WK", "name" => "Wake Island"],
            ["code" => "WF", "name" => "Wallis and Futuna"],
            ["code" => "EH", "name" => "Western Sahara"],
            ["code" => "YE", "name" => "Yemen"],
            ["code" => "ZM", "name" => "Zambia"],
            ["code" => "ZW", "name" => "Zimbabwe"],
            ["code" => "AX", "name" => "Åland Islands"]
        ];
        DB::table(config('core.acl.countries_table'))->insert($data);
    }
}
