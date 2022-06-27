import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../../common/models/pokemon.dart';

class HomeLoaging extends StatelessWidget {
  const HomeLoaging({Key? key}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: CircularProgressIndicator()
      ),
    );
  }
}
