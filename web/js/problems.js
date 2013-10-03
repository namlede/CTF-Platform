// Generated by CoffeeScript 1.6.3
(function() {
  window.load_problems = function() {
    return $.ajax({
      type: "GET",
      cache: false,
      url: "/api/problems",
      dataType: "json"
    }).done(function(data) {
      var d, html, id, _i, _len;
      html = '<div class="contentbox row-fluid">';
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        d = data[_i];
        id = d['pid'];
        html += "        <div class=\"row-fluid\">\n        <div class=\"offset1 span10\">\n        <div class=\"basic_view_header\">\n        <h3>" + d['displayname'] + ": " + d['basescore'] + "\n" + (d['correct'] ? '<span class="solved">Solved</span>' : '<span class="unsolved">Unsolved</span>') + "\n        </h3>\n        </div>\n        <div class=\"basic_view_body\">\n" + d['desc'] + "\n        <div id=msg_" + id + "></div>\n        <form onsubmit=\"handle_submit('" + id + "'); return false;\" class=\"form-inline\" id=\"form_" + id + "\">\n        <input id=\"" + id + "\" type=\"text\" autocomplete=\"off\"/>\n        <button class=\"btn\" type=\"submit\">Submit!</button>\n        </form>\n        </div>\n        </div>\n        </div>";
      }
      html += '</div>';
      $("#problems_holder").html(html);
      $(".basic_view_header").click(function() {
        return $(this).next().toggle('fast');
      });
      return $(".solved").parent().parent().next().hide();
    });
  };

}).call(this);