<section class="hero-block relative overflow-hidden rounded-3xl bg-slate-950 text-white">
  <div class="absolute inset-0">
    @if ($imageUrl)
      <img class="h-full w-full object-cover" src="{{ $imageUrl }}" alt="{{ $imageAlt }}">
    @else
      <div class="bg-linear-to-br h-full w-full from-slate-900 via-slate-800 to-slate-950"></div>
    @endif
    <div class="absolute inset-0 bg-slate-950/50"></div>
  </div>

  <div
    class="relative z-10 flex min-h-80 flex-col items-start justify-center gap-6 p-10 md:min-h-96 md:p-16">
    @if ($heading)
      <h2 class="text-4xl font-semibold tracking-tight md:text-5xl">{!! $heading !!}</h2>
    @endif

    @if ($subheading)
      <p class="max-w-2xl text-lg text-slate-200 md:text-xl">{!! $subheading !!}</p>
    @endif

    @if ($buttonText)
      @if ($buttonUrl)
        <a class="no-underline! inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-amber-950"
          href="{{ $buttonUrl }}">
          {!! $buttonText !!}
        </a>
      @else
        <span
          class="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-amber-950">
          {!! $buttonText !!}
        </span>
      @endif
    @endif
  </div>
</section>
