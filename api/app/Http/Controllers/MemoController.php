<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Symfony\Component\HttpFoundation\Response;
use App\Models\Memo;
use Illuminate\Support\Facades\Auth;
use Exception;

class MemoController extends Controller
{
    // メモの新規作成
    public function create()
    {
        try {

            // メモ一覧の数を取得
            $memoCount = count(Memo::where('userId', '=', Auth::id())->get());
            // 新規作成
            $memo = Memo::create([
                'userId' => Auth::id(),
                'position' => $memoCount > 0 ? $memoCount : 0,
            ]);
            return response()->json($memo, Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json($e, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // メモを全て取得
    public function getAll()
    {
        try {
            // ログイン中のユーザのメモを全て取得
            $memo = Memo::where('userId', '=', Auth::id())->get();
            return response()->json($memo, Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json($e, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}