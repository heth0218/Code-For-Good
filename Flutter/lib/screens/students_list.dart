import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:provider/provider.dart';

import '../widgets/student_card.dart';
import '../providers/student_provider.dart';

class StudentsList extends StatefulWidget {
  static const routeName = '/Studentslist';

  @override
  _StudentsListState createState() => _StudentsListState();
}

class _StudentsListState extends State<StudentsList> {
  List _data;

  List getData2() {
    getData();
    return _data;
  }

  Future<dynamic> getData() async {
    final url = 'http://chiragjrana.pythonanywhere.com/api/student';

    final response = await http.get(url);
    print(json.decode(response.body));
    return response.body;
  }

  @override
  Widget build(BuildContext context) {
    final students = Provider.of<StudentProvider>(context, listen: false);
    final routeArgs =
        ModalRoute.of(context).settings.arguments as Map<String, String>;
    return FutureBuilder(
        future: Provider.of<StudentProvider>(context, listen: false).getData(),
        builder: (ctx, dataSnapshot) {
          if (dataSnapshot.connectionState == ConnectionState.waiting) {
            return Center(
              child: CircularProgressIndicator(),
            );
          } else {
            return Consumer<StudentProvider>(
              builder: (ctx, studentData, child) => Scaffold(
                appBar: AppBar(
                  title: Text(
                    routeArgs['class'],
                  ),
                ),
                body: Column(
                  children: [
                    Expanded(
                      child: ListView.builder(
                        itemBuilder: (ctx, index) => StudentCard(
                            studentData.items[index]['name'],
                            studentData.items[index]['gender'],
                            studentData.items[index]['academic'],
                            studentData.items[index]['observed']),
                        itemCount: studentData.items.length,
                      ),
                    ),
                    RaisedButton(
                      onPressed: () {},
                      child: Text("Submit"),
                    )
                  ],
                ),
              ),
            );
          }
        });
  }
}
