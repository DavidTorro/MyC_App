import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

//ESTE ES UN COMENTARI DE PROVA

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(body: Center(child: Text('Hola MUNDO :D!'))),
    );
  }
}
