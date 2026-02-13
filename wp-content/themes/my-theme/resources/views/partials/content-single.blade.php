<article @php(post_class("h-entry mx-auto max-w-prose px-4"))>
  <header>
    <h1 class="p-name">
      {!! $title !!}
    </h1>

    @include("partials.entry-meta")
  </header>

  <div class="e-content prose">
    @php(the_content())
  </div>

  @if ($pagination())
    <footer>
      <nav class="page-nav" aria-label="Page">
        {!! $pagination !!}
      </nav>
    </footer>
  @endif

  @php(comments_template())
</article>
