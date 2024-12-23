import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'app/routes/app_pages.dart';

class DevNizamUddin extends StatelessWidget {
  const DevNizamUddin({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: "DevNizamUddin",
      debugShowCheckedModeBanner: false,
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
    );
  }
}
