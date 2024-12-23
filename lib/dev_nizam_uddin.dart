import 'package:devnizamuddin_github_io/app/modules/home/views/home_view.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class DevNizamUddin extends StatelessWidget {
  const DevNizamUddin({super.key});

  @override
  Widget build(BuildContext context) {
    return const GetMaterialApp(
      title: "DevNizamUddin",
      debugShowCheckedModeBanner: false,
      home: HomeView(),
    );
  }
}
