<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterStaffMudaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name" => "required|string|max:255",
            "nim" => "required|string|max:255|unique:staff_mudas",
            "angkatan" => "required|numeric",
            "no_hp" => "required|string|max:15",
            "id_line" => "required|string",
            "berkas_link" => "required|string",
        ];
    }
}
