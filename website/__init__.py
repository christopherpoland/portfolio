from flask import Flask
from flask import render_template, Blueprint, request, url_for, redirect, flash, jsonify, session

app = Flask(__name__, static_folder = './public', template_folder="./static")

import website.directory.views
