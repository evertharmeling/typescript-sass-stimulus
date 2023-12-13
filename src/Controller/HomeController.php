<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Environment;

final class HomeController
{
    public function __construct(
        private readonly Environment $templatingEngine,
    ) {
    }

    #[Route(path: '/')]
    public function __invoke(): Response
    {
        return new Response(
            $this->templatingEngine->render('home/home.html.twig')
        );
    }
}
