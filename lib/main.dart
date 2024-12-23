import 'package:devnizamuddin_github_io/app/home/controllers/home_controller.dart';
import 'package:devnizamuddin_github_io/dev_nizam_uddin.dart';
import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/url_strategy.dart';
import 'package:get/get.dart';

void main() {
  usePathUrlStrategy();

  Get.put(HomeController());

  runApp(const DevNizamUddin());
}
