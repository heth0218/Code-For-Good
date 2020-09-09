import 'package:flutter/material.dart';

class MainForm extends StatelessWidget {
  static const routeName = '/MainForm';
  // void getdata(){
  //   return
  // }

  @override
  Widget build(BuildContext context) {
    final routeArgs = ModalRoute.of(context).settings.arguments as Map;
    return Scaffold(
      appBar: AppBar(
        title: Text(routeArgs['name']),
      ),
      body: Container(
        width: double.infinity,
        child: Column(
          children: [
            Expanded(child: SomeForm(routeArgs['name'])),
          ],
        ),
      ),
    );
  }
}

class SomeForm extends StatefulWidget {
  final id;

  SomeForm(this.id);

  @override
  _SomeFormState createState() => _SomeFormState();
}

class _SomeFormState extends State<SomeForm> {
  TextEditingController _controller;
  Map<int, bool> _selectedList = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  };

  List<String> questions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      itemBuilder: (ctx, index) {
        return Column(
          children: [
            Text(questions[index]),
            Checkbox(
              tristate: true,
              autofocus: false,
              value: _selectedList[index],
              onChanged: (value) {
                if (value == null) {
                  value = false;
                }
                setState(() {
                  _selectedList[index] = value;
                  if (value == true) {
                    showDialog(
                      context: context,
                      builder: (ctx) => AlertDialog(
                        title: Text("Enter an explaination"),
                        content: TextField(
                          controller: _controller,
                        ),
                        actions: <Widget>[
                          FlatButton(
                              child: Text("OK"),
                              onPressed: () {
                                Navigator.of(context).pop(false);
                              }),
                        ],
                      ),
                    );
                  }
                });
              },
            ),
          ],
        );
      },
    );
  }
}
