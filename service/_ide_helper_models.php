<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models\Cafe{
/**
 * App\Models\Cafe\Cafe
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $type
 * @property string|null $icon
 * @property string|null $json
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe query()
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe whereJson($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cafe whereUpdatedAt($value)
 */
	class Cafe extends \Eloquent {}
}

namespace App\Models\Cafe{
/**
 * App\Models\Cafe\Data
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Data newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Data newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Data query()
 */
	class Data extends \Eloquent {}
}

namespace App\Models\Defaults{
/**
 * App\Models\Defaults\RestaurantData
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 * @property string $title
 * @property string|null $json
 * @method static \Illuminate\Database\Eloquent\Builder|RestaurantData newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RestaurantData newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RestaurantData query()
 * @method static \Illuminate\Database\Eloquent\Builder|RestaurantData whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RestaurantData whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RestaurantData whereJson($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RestaurantData whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RestaurantData whereUpdatedAt($value)
 */
	class RestaurantData extends \Eloquent {}
}

namespace App\Models\Portions{
/**
 * App\Models\Portions\Portion
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $title
 * @property string|null $body
 * @property string|null $ingredients
 * @property string|null $allergenic
 * @property string|null $price
 * @property string|null $price_additional
 * @method static \Illuminate\Database\Eloquent\Builder|Portion newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Portion newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Portion query()
 * @method static \Illuminate\Database\Eloquent\Builder|Portion search($keywords)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion whereAllergenic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion whereIngredients($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion wherePriceAdditional($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portion whereUpdatedAt($value)
 */
	class Portion extends \Eloquent {}
}

namespace App\Models\Restaurant{
/**
 * App\Models\Restaurant\Lunch
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $date
 * @property string|null $serving_time
 * @property string|null $price
 * @property string|null $price_additional
 * @property string|null $type
 * @property string|null $json
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch query()
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch whereJson($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch wherePriceAdditional($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch whereServingTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Lunch whereUpdatedAt($value)
 */
	class Lunch extends \Eloquent {}
}

namespace App\Models\Restaurant{
/**
 * App\Models\Restaurant\Menu
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $type
 * @property string|null $icon
 * @property string|null $json
 * @method static \Illuminate\Database\Eloquent\Builder|Menu newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Menu newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Menu query()
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereJson($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Menu whereUpdatedAt($value)
 */
	class Menu extends \Eloquent {}
}

namespace App\Models\ServiceHours{
/**
 * App\Models\ServiceHours\ServiceHour
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $title
 * @property string|null $json
 * @property string|null $closed_until
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour query()
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour whereClosedUntil($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour whereJson($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ServiceHour whereUpdatedAt($value)
 */
	class ServiceHour extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property string $role
 * @property string|null $remember_token
 * @property int|null $current_team_id
 * @property string|null $profile_photo_path
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read string $profile_photo_url
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCurrentTeamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereProfilePhotoPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorRecoveryCodes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorSecret($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

