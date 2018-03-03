#!/usr/bin/env node

const ejs = require('ejs');
const marked = require('marked');
const fs = require('fs');
const path = require('path');
const request = require('request');

function Push(wname, ht_doc) {
  const options = {
    uri: "http://127.0.0.1:3000/test",
    headers: {
      "Content-type": "application/json",
    },
    json: {
      "wname": wname,
      "ht_doc": ht_doc
    }
  };
  request.post(options, function(error, response, body){});
}

function MDPush(mdfilepath) {
  fs.readFile(mdfilepath, 'utf8', function (err, md_doc) {
    if (err) throw err;

    mdfilename = path.basename(mdfilepath);
    const ht_doc_raw = marked(md_doc);

    const cmd_base = process.argv[1].slice(0, -6)
    const template = fs.readFileSync(cmd_base+'/template.ejs', 'utf-8');
    const ht_doc = ejs.render(template,
                            {title: mdfilename,
                             cntent: ht_doc_raw});
    const wname = mdfilename;
    Push(wname, ht_doc);
  });
}

const mdfilepath = process.argv[2];
MDPush(mdfilepath);
