/**
  @file
  Codevenience backend entry point.

  @copyright
  Copyright (c) 2024, Codevenience Organization. All rights reserved.<BR>

  SPDX-License-Identifier: BSD-3-Clause

  @par Specification Reference:
  - Refer: https://git-scm.com/docs/gitattributes

**/

const express = require ('express')
const app     = express ()
const port    = 3000

app.get ('/', (req, res) => {
  res.send ('Welcome to Codevenience backend!')
})

app.listen (port, () => {
  console.log (`Codevenience backend listening on port ${port}`)
})
