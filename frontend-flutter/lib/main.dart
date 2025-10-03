import 'package:flutter/material.dart';
import 'package:myc_app/app/theme/app_theme.dart';
import 'package:myc_app/catalog/catalog_page.dart';

void main() {
  runApp(const MainApp());
}


class MainApp extends StatelessWidget {
  const MainApp({super.key});


 @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light, // Tema claro (con tu paleta AppColors)
      darkTheme: AppTheme.dark, // Tema oscuro (con tu paleta AppColors)
      home: const CatalogPage(),
    );
  }

  // @override
  // Widget build(BuildContext context) {
  //   return const MaterialApp(
  //     debugShowCheckedModeBanner: false,
  //     home: Scaffold(
  //       body: Center(
  //         child: Text('Hola MUNDO :D!')
  //       )
  //     ),
  //   );
  // }



}
