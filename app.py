from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World!"


c = 0


@app.route("/sms", methods=['POST'])
def sms_reply():
    global c
    """Respond to incoming calls with a simple text message."""
    # Fetch the message
    msg = request.form.get('Body')

    # Create reply
    # resp = MessagingResponse()
    # resp.message("You said: {}".format(msg))
    p = ['hi', 'hey', 'hola', 'heya', 'howdy', 'hello', 'heyy', 'hey', 'hi']
    q = ['heth', 'chirag']
    if msg.lower() in p:
        txt = "Can you enter the name of the student?"
        resp = MessagingResponse()
        resp.message(txt)
        c = c+1
        return str(resp)
    if c == 1:
        txt = "Okay"
        resp = MessagingResponse()
        resp.message(txt)
        c = c+1
        return str(resp)
    if c == 2:
        txt = "Bye"
        resp = MessagingResponse()
        resp.message(txt)
        return str(resp)


if __name__ == "__main__":
    app.run(debug=True)
