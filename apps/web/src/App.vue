<script setup lang="ts">
import { onMounted, ref } from 'vue'

type ApiStatus = 'checking' | 'available' | 'unavailable'

const apiStatus = ref<ApiStatus>('checking')
const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

onMounted(async () => {
  try {
    const response = await fetch(`${apiUrl}/health`)
    const body = (await response.json()) as { status?: string }

    apiStatus.value = response.ok && body.status === 'ok' ? 'available' : 'unavailable'
  } catch {
    apiStatus.value = 'unavailable'
  }
})
</script>

<template>
  <main>
    <section class="intro">
      <p class="eyebrow">Local-first narrative knowledge</p>
      <h1>Shard Archive</h1>
      <p class="description">Shard Archive is in early development.</p>
      <p class="api-status" :class="apiStatus" aria-live="polite">
        <span class="status-dot" aria-hidden="true"></span>
        <template v-if="apiStatus === 'checking'">Checking the local API…</template>
        <template v-else-if="apiStatus === 'available'">Local API is available.</template>
        <template v-else>Local API is unavailable.</template>
      </p>
    </section>
  </main>
</template>
