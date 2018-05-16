// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {getAPI, GoogleConfigurable} from '../../shared/src';
import {cloudresourcemanager_v1} from './v1';
import {cloudresourcemanager_v1beta1} from './v1beta1';
import {cloudresourcemanager_v2} from './v2';
import {cloudresourcemanager_v2beta1} from './v2beta1';

export const VERSIONS = {
  'v1': cloudresourcemanager_v1.Cloudresourcemanager,
  'v1beta1': cloudresourcemanager_v1beta1.Cloudresourcemanager,
  'v2': cloudresourcemanager_v2.Cloudresourcemanager,
  'v2beta1': cloudresourcemanager_v2beta1.Cloudresourcemanager,
};

export function cloudresourcemanager(version: 'v1'):
    cloudresourcemanager_v1.Cloudresourcemanager;
export function cloudresourcemanager(options: cloudresourcemanager_v1.Options):
    cloudresourcemanager_v1.Cloudresourcemanager;
export function cloudresourcemanager(version: 'v1beta1'):
    cloudresourcemanager_v1beta1.Cloudresourcemanager;
export function cloudresourcemanager(
    options: cloudresourcemanager_v1beta1.Options):
    cloudresourcemanager_v1beta1.Cloudresourcemanager;
export function cloudresourcemanager(version: 'v2'):
    cloudresourcemanager_v2.Cloudresourcemanager;
export function cloudresourcemanager(options: cloudresourcemanager_v2.Options):
    cloudresourcemanager_v2.Cloudresourcemanager;
export function cloudresourcemanager(version: 'v2beta1'):
    cloudresourcemanager_v2beta1.Cloudresourcemanager;
export function cloudresourcemanager(
    options: cloudresourcemanager_v2beta1.Options):
    cloudresourcemanager_v2beta1.Cloudresourcemanager;
export function cloudresourcemanager<
    T = cloudresourcemanager_v1.Cloudresourcemanager |
        cloudresourcemanager_v1beta1.Cloudresourcemanager |
        cloudresourcemanager_v2.Cloudresourcemanager |
        cloudresourcemanager_v2beta1.Cloudresourcemanager>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1'|
    cloudresourcemanager_v1.Options|'v1beta1'|
    cloudresourcemanager_v1beta1.Options|'v2'|
    cloudresourcemanager_v2.Options|'v2beta1'|
    cloudresourcemanager_v2beta1.Options) {
  return getAPI<T>('cloudresourcemanager', versionOrOptions, VERSIONS, this);
}