// Copyright (C) 2023 Light, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { getUserOperation } from "@lightdotso/client";
import { cache } from "react";
import "server-only";
import type { Hex } from "viem";

export const revalidate = 300;

export const preload = (user_operation_hash: Hex) => {
  void getCachedUserOperation(user_operation_hash);
};

export const getCachedUserOperation = cache(
  async (user_operation_hash: Hex) => {
    return getUserOperation(
      { params: { query: { user_operation_hash: user_operation_hash } } },
      false,
    );
  },
);
