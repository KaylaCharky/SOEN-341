from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, PasswordField, SubmitField, BooleanField, TextAreaField
from wtforms.validators import DataRequired, Length, ValidationError
from app.models import User
from flask_login import current_user


class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=15)])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Start Using PIX')

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError('That user name is taken, please try another')


class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=15)])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember This Account')
    submit = SubmitField('Login to PIX')


class UpdateAccountForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=15)])
    picture = FileField('Update Profile Picture', validators=[FileAllowed(['jpg'])])
    submit = SubmitField('Update')

    def validate_username(self, username):
        if username.data != current_user.username:
            user = User.query.filter_by(username=username.data).first()
            if user:
                raise ValidationError('That user name is taken, please try another')


class PostForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    post_image = FileField('Add Picture to Post', validators=[FileAllowed(['jpg'])])
    content = TextAreaField('Content', validators=[DataRequired()])
    comment = StringField('Comment')
    submit = SubmitField('Post Photo')


class CommentForm(FlaskForm):
    comment = StringField('post', validators=[DataRequired()])
