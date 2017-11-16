////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - Create a chat application using the utility methods we give you
//
// Need some ideas?
//
// - Cause the message list to automatically scroll as new
//   messages come in
// - Highlight messages from you to make them easy to find
// - Highlight messages that mention you by your GitHub username
// - Group subsequent messages from the same sender
// - Create a filter that lets you filter messages in the chat by
//   sender and/or content
////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { render } from 'react-dom'
import { login, sendMessage, subscribeToMessages } from './utils/ChatUtils'
import './styles'

/*
Here's how to use the ChatUtils:

login((error, auth) => {
  // hopefully the error is `null` and you have a auth.github object
})

sendMessage(
  auth.uid,                       // the auth.uid string
  auth.github.username,           // the username
  auth.github.profileImageURL,    // the user's profile image
  'hello, this is a message'      // the text of the message
)

const unsubscribe = subscribeToMessages(messages => {
  // here are your messages as an array, it will be called
  // every time the messages change
})

unsubscribe() // stop listening for new messages

The world is your oyster!
*/



class Chat extends React.Component {
  state = {
    err: null,
    auth: null,
    msgs: [],
  }

  componentDidMount() {
    login((err, auth) => {
      if (err) {
        this.setState({err});
      }
      else {
        this.setState({auth});
      }
      subscribeToMessages(msgs => {
        this.setState({msgs})
      })
    })
  }

  componentDidUpdate() {
    this.scroller.scrollTop = this.scroller.scrollHeight;
  }


  onSubmit = (event) => {
    event.preventDefault();

    const {auth} = this.state;
    const msgTxt = this.inputNode.value;

    sendMessage(
      auth.uid,
      auth.github.username,
      auth.github.profileImageURL,
      msgTxt
    );

    event.target.reset();
  }

  render() {
    if (this.state.auth) {
      return (
        <div className="chat">
          <header className="chat-header">
            <h1 className="chat-title">HipReact</h1>
            <p className="chat-message-count"># messages: {this.state.msgs.length}</p>
          </header>
          <div className="messages" ref={node => this.scroller = node}>
            <ol className="message-groups">
              {this.state.msgs.map(msg => (
                <li className="message-group">
                  <div className="message-group-avatar">
                    <img src={msg.avatarURL} />
                  </div>
                  <ol className="messages">
                    <li className="message">{msg.text}</li>
                  </ol>
                </li>
              ))}
            </ol>
          </div>
          <form className="new-message-form" onSubmit={this.onSubmit}>
            <div className="new-message">
              <input ref={node => this.inputNode = node} type="text" placeholder="say something..."/>
            </div>
          </form>
        </div>
      )
    }
    else {
      return <div>Loading...</div>
    }
  }
}

render(<Chat/>, document.getElementById('app'))
