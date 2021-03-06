"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "%% -*- mode: erlang; erlang-indent-level: 2 -*-\n%%% Created :  7 May 2012 by mats cronqvist <masse@klarna.com>\n\n%% @doc\n%% Demonstrates how to print a record.\n%% @end\n\n-module('ex').\n-author('mats cronqvist').\n-export([demo/0,\n         rec_info/1]).\n\n-record(demo,{a=\"One\",b=\"Two\",c=\"Three\",d=\"Four\"}).\n\nrec_info(demo) -> record_info(fields,demo).\n\ndemo() -> expand_recs(?MODULE,#demo{a=\"A\",b=\"BB\"}).\n\nexpand_recs(M,List) when is_list(List) ->\n  [expand_recs(M,L)||L<-List];\nexpand_recs(M,Tup) when is_tuple(Tup) ->\n  case tuple_size(Tup) of\n    L when L < 1 -> Tup;\n    L ->\n      try\n        Fields = M:rec_info(element(1,Tup)),\n        L = length(Fields)+1,\n        lists:zip(Fields,expand_recs(M,tl(tuple_to_list(Tup))))\n      catch\n        _:_ -> list_to_tuple(expand_recs(M,tuple_to_list(Tup)))\n      end\n  end;\nexpand_recs(_,Term) ->\n  Term.\n\n";
var _default = code;
exports.default = _default;