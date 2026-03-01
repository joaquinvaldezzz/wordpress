<div class="overflow-hidden rounded-2xl bg-white shadow-md">
  @if ($imageUrl)
    <div class="card-block__image">
      <img class="" src="{{ $imageUrl }}" alt="{{ $imageAlt }}">
    </div>
  @endif

  <div class="p-6">
    @if ($title)
      <h3 class="text-4xl font-semibold tracking-tight">{!! $title !!}</h3>
    @endif

    @if ($description)
      <p class="text-xl text-gray-600">{!! $description !!}</p>
    @endif

    @if ($linkUrl)
      <a class="no-underline! inline-block rounded-xl bg-amber-600 px-4 py-3 text-amber-50"
        href="{{ $linkUrl }}">
        {{ $linkText ?: __("Learn More", "sage") }}
      </a>
    @endif
  </div>
</div>
