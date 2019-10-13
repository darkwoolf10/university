<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class Home
 * @package App\Controller
 */
class Home extends AbstractController
{
    /**
     * @Route("/home")
     * @return Response
     */
    public function index()
    {
        return $this->render('home.html.twig');
    }
}
