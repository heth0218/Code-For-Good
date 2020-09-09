import 'package:flutter/cupertino.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class StudentProvider extends ChangeNotifier {
  List _items = [];

  List get items {
    return [..._items];
  }

  Future<dynamic> getData() async {
    final url = 'http://chiragjrana.pythonanywhere.com/api/student';

    final response = await http.get(url);
    print(json.decode(response.body));
    _items = json.decode(response.body);
    notifyListeners();
  }
}
