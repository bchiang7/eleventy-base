---
pagination:
  data: characters
  alias: character
  size: 1
layout: layouts/base.njk
permalink: '/characters/{{character.name|slug}}/'
title: Rick & Morty Characters
---

## {{character.name}}

![{{character.name}}]({{character.image}})
