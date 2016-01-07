import React from 'react';
import Dialog from 'material-ui/lib/dialog.js';
import TextField from 'material-ui/lib/text-field.js';
import DatePicker from 'material-ui/lib/date-picker/date-picker.js';

import EditTActions from '../actions/editTActions.js';

export default class DialogTInfo extends React.Component{
  constructor(props){
    super(props);
    this._onDialogInfoSubmit = this._onDialogInfoSubmit.bind(this);
    this._onDialogInfoCancel = this._onDialogInfoCancel.bind(this);
    this._TInfoDialogActions = [
      {text: 'Yep', onTouchTap: this._onDialogInfoSubmit, ref: 'submit'},
      {text: 'Cancel', onTouchTap: this._onDialogInfoCancel}
    ];
  }

  render(){
    return (
      <Dialog
        autoDetectWindowHeight={true}
        autoScrollBodyContent={true}
        title='Edit Tounament Info'
        actions={this._TInfoDialogActions}
        actionFocus='submit'
        ref='TInfoDialog'>
        <form role='form'>
          <div className='form-group'>
            <TextField type='text' defaultValue={this.props.Tjson.name} hintText='Group Name (Required)' ref='name' fullWidth={true} />
            <TextField type='text' defaultValue={this.props.Tjson.sport} hintText='Game' ref='game' fullWidth={true} />
            <TextField type='text' defaultValue={this.props.Tjson.finished} hintText='Status' ref='status' fullWidth={true} />
            <TextField type='text' defaultValue={this.props.Tjson.info.address} hintText='Location' ref='location' fullWidth={true} />
            <TextField type='text' defaultValue={this.props.Tjson.info.brief} hintText='Brief' ref='brief' fullWidth={true} />
            <DatePicker defaultValue={this.props.Tjson.startAt} ref='date' />
          </div>
        </form>
      </Dialog>
    );
  }

  _onDialogInfoSubmit(){
    var TInfo = [
      this.refs.name.getValue(),
      this.refs.game.getValue(),
      this.refs.status.getValue(),
      this.refs.location.getValue(),
      this.refs.brief.getValue(),
      this.refs.date.getDate()
    ];
    window.setTimeout(EditTActions.editTInfo.bind(
      this,
      TInfo
    ));
    this.refs.TInfoDialog.setState({
      open: false
    });
  }

  _onDialogInfoCancel(){
    this.refs.TInfoDialog.setState({
      open: false
    });
  }

  show(){
    this.refs.TInfoDialog.setState({
      open: true
    });
  }
}
