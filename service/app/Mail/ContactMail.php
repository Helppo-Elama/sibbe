<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $reply_to, $message, $sender, $email)
    {
        $this->name = $name;
        $this->reply_to = $reply_to;
        $this->message = $message;
        $this->sender = $sender;
        $this->email = $email;
    } //end __construct()

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $name = $this->name;
        $email = $this->email;
        $message = $this->message;
        $sender = $this->sender;
        if ($this->sender == "contact") {
            return $this->from($this->email, $this->name)
                ->replyTo($this->reply_to, $this->name)
                ->subject("Yhteydenottopyyntö Villa Sibbe -sivustolta")
                ->view("contact")
                ->with("name", $this->name)
                ->with("email", $this->email)
                ->with("body", $this->message);
        } elseif ($this->sender == "feedback") {
            return $this->from($this->email, $this->name)
                ->replyTo($this->reply_to, $this->name)
                ->subject("Palautetta Villa Sibbe -sivustolta")
                ->view("contact")
                ->with("name", $this->name)
                ->with("email", $this->email)
                ->with("body", $this->message);
        } elseif ($this->sender == "restaurant") {
            return $this->from($this->email, $this->name)
                ->replyTo($this->reply_to, $this->name)
                ->subject("Ravintolatiedustelu Villa Sibbe -sivustolta")
                ->view("contact")
                ->with("name", $this->name)
                ->with("email", $this->email)
                ->with("body", $this->message);
        } elseif ($this->sender == "cafe") {
            return $this->from($this->email, $this->name)
                ->replyTo($this->reply_to, $this->name)
                ->subject("Kahvilatiedustelu Villa Sibbe -sivustolta")
                ->view("contact")
                ->with("name", $this->name)
                ->with("email", $this->email)
                ->with("body", $this->message);
        } elseif ($this->sender == "festivity") {
            return $this->from($this->email, $this->name)
                ->replyTo($this->reply_to, $this->name)
                ->subject("Juhlatilatiedustelu Villa Sibbe -sivustolta")
                ->view("contact")
                ->with("name", $this->name)
                ->with("email", $this->email)
                ->with("body", $this->message);
        } else {
            return $this->from($this->email, $this->name)
                ->replyTo($this->reply_to, $this->name)
                ->subject(
                    "Tuntematon (" .
                        $this->sender .
                        ", ilmoittakaa verkkovastaavalle) tiedustelu Villa Sibbe -sivustolta"
                )
                ->view("contact")
                ->with("name", $this->name)
                ->with("email", $this->email)
                ->with("body", $this->message);
        } //end if
    } //end build()
} //end class
