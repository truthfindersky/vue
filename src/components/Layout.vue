<template>
    <header>
      <slot name="header"></slot> <!-- Named slot -->
    </header>
    <main>
      <slot></slot> <!-- Default slot -->
    </main>
    <footer>
      <slot name="footer"></slot> <!-- Named slot -->
    </footer>
  </template>
  