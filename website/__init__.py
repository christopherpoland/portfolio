from flask import Flask
from flask import render_template, Blueprint, request, url_for, redirect, flash, jsonify, session
from flask_mail import Mail
from config import Config
from flask_cors import CORS, cross_origin
import os
app = Flask(__name__, static_folder = './public', template_folder="./static")

app.config.from_object(os.environ['APP_SETTINGS'])

mail = Mail(app)
CORS(app)

import website.directory.views
