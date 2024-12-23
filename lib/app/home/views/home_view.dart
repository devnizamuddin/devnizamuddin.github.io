import 'package:devnizamuddin_github_io/app/config/app_assets.dart';

import '../../components/nav_bar.dart';
import '../../extensions/num.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            fit: BoxFit.cover,
            image: AssetImage(AppAssets.MAIN_BACKGROUND),
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            20.h,
            const NavBar(),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.only(left: 128),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Welcome to my portfolio!'.toUpperCase(),
                      style: const TextStyle(
                        fontSize: 20,
                      ),
                    ),
                    20.h,
                    const Text(
                      'Nizam Uddin',
                      style: TextStyle(
                        fontSize: 32,
                      ),
                    ),
                    10.h,
                    const Text(
                      'Shamrat',
                      style: TextStyle(
                        fontSize: 32,
                      ),
                    ),
                    20.h,
                    const Text(
                      'Flutter Developer',
                      style: TextStyle(
                        fontSize: 20,
                      ),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
