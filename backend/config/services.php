<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */
    'test_server' => [
        'access_token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTY5Nzk4LCJpYXQiOjE3MTUxNjk0OTgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjljMjVmYjUyLTVmZTgtNDdkMC1iOTUyLTE4ZmQxNWZjYTJhYSIsInN1YiI6InR1c2hhcnBhdGVrYXI0NUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJTYW5qaXZhbmkiLCJjbGllbnRJRCI6IjljMjVmYjUyLTVmZTgtNDdkMC1iOTUyLTE4ZmQxNWZjYTJhYSIsImNsaWVudFNlY3JldCI6ImpUd21NRUNLc25KVW1iYVQiLCJvd25lck5hbWUiOiJUdXNoYXIgU3VkaGFrYXIgUGF0ZWthciIsIm93bmVyRW1haWwiOiJ0dXNoYXJwYXRla2FyNDVAZ21haWwuY29tIiwicm9sbE5vIjoiVUlUMjFNMTA0OSJ9.yOMpUKR_hKVb7TjZxbeawE8xtWisprhq70VE_QmvQvo',
    ],

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

];
