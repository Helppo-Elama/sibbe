<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FeedbackMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $email, $message, $sender)
    {
        $this->name = $name;
        $this->email = $email;
        $this->message = $message;
        $this->sender = $sender;
    }//end __construct()


    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        if ($this->sender == "contact") {
            return $this->from($this->email, $this->name)
                        ->replyTo($this->email, $this->name)
                        ->subject("Yhteydenottopyyntö Villa Sibbe -sivustolta")
                        ->view('feedback')
                        ->with("name", $this->name)
                        ->with("email", $this->email)
                        ->with("body", $this->message);
        } elseif ($this->sender == "feedback") {
            return $this->from($this->email, $this->name)
                        ->replyTo($this->email, $this->name)
                        ->subject("Palautetta Villa Sibbe -sivustolta")
                        ->view('feedback')
                        ->with("name", $this->name)
                        ->with("email", $this->email)
                        ->with("body", $this->message);
        }
    }//end build()
}//end class
