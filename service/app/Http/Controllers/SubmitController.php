<?php

namespace App\Http\Controllers;

use App\Mail\FeedbackMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SubmitController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
                "name" => "required|string",
                "email" => "required|email",
                "message" => "required",
            ]);
        Mail::to(config("mail.to.address"))->send(
            new FeedbackMail($request["name"], $validated["email"], $validated["message"], $request->sender)
        );
        return response()->json(null, 200);
    }//end submit()
}//end class
