<!--
  @file
  Navigation bar component file.

  @copyright
  Copyright (c) 2024, Codevenience Organization. All rights reserved.<BR>

  SPDX-License-Identifier: BSD-3-Clause

  @par Specification Reference:

-->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="">{{ brand_name }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
        aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="">News</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script type="text/javascript">
export default {
  name: 'NavigationBar',
  props: {
    brand_name: String
  }
}
</script>

<style type="text/css" scoped>
/* Component customeized CSS configuration. */
</style>
