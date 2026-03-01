<section class="aprio-hero-block bg-linear-to-br from-orange-600 via-orange-500 to-amber-500">
  <div
    class="md:min-h-112 mx-auto flex min-h-96 max-w-4xl flex-col items-center justify-center gap-8 px-8 py-24 text-center text-white">
    @if ($headline)
      <h1 class="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">{!! $headline !!}
      </h1>
    @endif

    @if ($description)
      <p class="max-w-3xl text-lg leading-relaxed md:text-xl">{!! $description !!}</p>
    @endif

    <div class="flex flex-wrap items-center justify-center gap-4">
      @if ($primaryButtonText)
        @if ($primaryButtonUrl)
          <a class="no-underline! rounded-full bg-white px-8 py-4 text-base font-bold uppercase tracking-wide text-orange-600 transition hover:bg-orange-50"
            href="{{ $primaryButtonUrl }}">
            {!! $primaryButtonText !!}
          </a>
        @else
          <span
            class="rounded-full bg-white px-8 py-4 text-base font-bold uppercase tracking-wide text-orange-600">
            {!! $primaryButtonText !!}
          </span>
        @endif
      @endif

      @if ($secondaryButtonText)
        @if ($secondaryButtonUrl)
          <a class="no-underline! rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            href="{{ $secondaryButtonUrl }}">
            {!! $secondaryButtonText !!}
          </a>
        @else
          <span
            class="rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold uppercase tracking-wide text-white">
            {!! $secondaryButtonText !!}
          </span>
        @endif
      @endif
    </div>
  </div>
</section>
