import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'widgets/chart.dart';
import 'widgets/form.dart';
import './screens/select_class_screen.dart';
import './screens/students_list.dart';
import './providers/student_provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(
          create: (ctx) => StudentProvider(),
        ),
      ],
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        home: Scaffold(
          body: SelectClass(),
        ),
        routes: {
          MainForm.routeName: (ctx) => MainForm(),
          Chart.routeName: (ctx) => Chart(),
          //ClassScreen.routeName: (ctx) => ClassScreen(),
          StudentsList.routeName: (ctx) => StudentsList(),
        },
      ),
    );
  }
}
