from website import app, mail
from flask import render_template, Blueprint, request, url_for, redirect, flash, jsonify, session, make_response
from json import *
from flask_cors import CORS, cross_origin
import os, json, sys
from flask_mail import Message

@app.route('/')
@app.route('/work')
def index():
 return render_template("index.html")
@app.route('/about')
def about():
  return render_template("index.html")

@app.route('/email', methods=['GET', 'POST'])
def email():
    if request.method == 'POST':
        data = request.get_json(force="true")
        print(data, file=sys.stderr)
        name = data['name']
        subject = "Portfolio Message - " + name
        message = data['message']
        sender = data['email']
        msg = Message(subject, sender='chris.poland94@gmail.com', recipients=['chris.poland94@gmail.com'])
        msg.body = message
        msg.html = "<h1>Message from " + name + "</h1>" + "<p>" + message + "</p>" + "<br/>" + "Respond to: <b>" + sender + "</b>"
        mail.send(msg)

        res = make_response(jsonify({"message": "OK"}), 200)

        return res
@app.route('/<path:path>', methods=('GET', 'POST'))
def catch_all(path):
    return ("<h1>404</h1>")
