import 'package:devnizamuddin_github_io/app/config/theme.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'app/home/views/home_view.dart';

class DevNizamUddin extends StatelessWidget {
  const DevNizamUddin({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'DevNizamUddin',
      debugShowCheckedModeBanner: false,
      theme: lightTheme,
      home: const HomeView(),
    );
  }
}
