import 'package:flutter/material.dart';

import 'form.dart';

class StudentCard extends StatelessWidget {
  final name;
  final gender;
  final academic;
  final observed;

  StudentCard(this.name, this.gender, this.academic, this.observed);
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      child: Card(
        child: Column(
          children: [
            CircleAvatar(
              radius: 50,
              backgroundColor: Colors.amber,
            ),
            Text("Name: $name"),
            Text("Gender: $gender"),
            Text("Academic: $academic"),
            Text("Observed: $observed"),
            SizedBox(height: 10),
          ],
        ),
      ),
      onTap: () {
        Navigator.of(context)
            .pushNamed(MainForm.routeName, arguments: {'name': name});
      },
    );
  }
}
