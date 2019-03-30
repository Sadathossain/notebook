"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "module UniquePerms (\n    uniquePerms\n    )\nwhere\n\n-- | Find all unique permutations of a list where there might be duplicates.\nuniquePerms :: (Eq a) => [a] -> [[a]]\nuniquePerms = permBag . makeBag\n\n-- | An unordered collection where duplicate values are allowed,\n-- but represented with a single value and a count.\ntype Bag a = [(a, Int)]\n\nmakeBag :: (Eq a) => [a] -> Bag a\nmakeBag [] = []\nmakeBag (a:as) = mix a $ makeBag as\n  where\n    mix a []                        = [(a,1)]\n    mix a (bn@(b,n):bs) | a == b    = (b,n+1):bs\n                        | otherwise = bn : mix a bs\n\npermBag :: Bag a -> [[a]]\npermBag [] = [[]]\npermBag bs = concatMap (\\(f,cs) -> map (f:) $ permBag cs) . oneOfEach $ bs\n  where\n    oneOfEach [] = []\n    oneOfEach (an@(a,n):bs) =\n        let bs' = if n == 1 then bs else (a,n-1):bs\n        in (a,bs') : mapSnd (an:) (oneOfEach bs)\n    \n    apSnd f (a,b) = (a, f b)\n    mapSnd = map . apSnd\n\n";
var _default = code;
exports.default = _default;