<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);

return array(
    'JVal\\Constraint' => $vendorDir . '/stefk/jval/src/Constraint.php',
    'JVal\\Constraint\\AbstractCountConstraint' => $vendorDir . '/stefk/jval/src/Constraint/AbstractCountConstraint.php',
    'JVal\\Constraint\\AbstractOfConstraint' => $vendorDir . '/stefk/jval/src/Constraint/AbstractOfConstraint.php',
    'JVal\\Constraint\\AbstractRangeConstraint' => $vendorDir . '/stefk/jval/src/Constraint/AbstractRangeConstraint.php',
    'JVal\\Constraint\\AllOfConstraint' => $vendorDir . '/stefk/jval/src/Constraint/AllOfConstraint.php',
    'JVal\\Constraint\\AnyOfConstraint' => $vendorDir . '/stefk/jval/src/Constraint/AnyOfConstraint.php',
    'JVal\\Constraint\\DependenciesConstraint' => $vendorDir . '/stefk/jval/src/Constraint/DependenciesConstraint.php',
    'JVal\\Constraint\\EnumConstraint' => $vendorDir . '/stefk/jval/src/Constraint/EnumConstraint.php',
    'JVal\\Constraint\\FormatConstraint' => $vendorDir . '/stefk/jval/src/Constraint/FormatConstraint.php',
    'JVal\\Constraint\\ItemsConstraint' => $vendorDir . '/stefk/jval/src/Constraint/ItemsConstraint.php',
    'JVal\\Constraint\\MaxItemsConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MaxItemsConstraint.php',
    'JVal\\Constraint\\MaxLengthConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MaxLengthConstraint.php',
    'JVal\\Constraint\\MaxPropertiesConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MaxPropertiesConstraint.php',
    'JVal\\Constraint\\MaximumConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MaximumConstraint.php',
    'JVal\\Constraint\\MinItemsConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MinItemsConstraint.php',
    'JVal\\Constraint\\MinLengthConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MinLengthConstraint.php',
    'JVal\\Constraint\\MinPropertiesConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MinPropertiesConstraint.php',
    'JVal\\Constraint\\MinimumConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MinimumConstraint.php',
    'JVal\\Constraint\\MultipleOfConstraint' => $vendorDir . '/stefk/jval/src/Constraint/MultipleOfConstraint.php',
    'JVal\\Constraint\\NotConstraint' => $vendorDir . '/stefk/jval/src/Constraint/NotConstraint.php',
    'JVal\\Constraint\\OneOfConstraint' => $vendorDir . '/stefk/jval/src/Constraint/OneOfConstraint.php',
    'JVal\\Constraint\\PatternConstraint' => $vendorDir . '/stefk/jval/src/Constraint/PatternConstraint.php',
    'JVal\\Constraint\\PropertiesConstraint' => $vendorDir . '/stefk/jval/src/Constraint/PropertiesConstraint.php',
    'JVal\\Constraint\\RequiredConstraint' => $vendorDir . '/stefk/jval/src/Constraint/RequiredConstraint.php',
    'JVal\\Constraint\\TypeConstraint' => $vendorDir . '/stefk/jval/src/Constraint/TypeConstraint.php',
    'JVal\\Constraint\\UniqueItemsConstraint' => $vendorDir . '/stefk/jval/src/Constraint/UniqueItemsConstraint.php',
    'JVal\\Context' => $vendorDir . '/stefk/jval/src/Context.php',
    'JVal\\Exception\\ConstraintException' => $vendorDir . '/stefk/jval/src/Exception/ConstraintException.php',
    'JVal\\Exception\\Constraint\\EmptyArrayException' => $vendorDir . '/stefk/jval/src/Exception/Constraint/EmptyArrayException.php',
    'JVal\\Exception\\Constraint\\InvalidRegexException' => $vendorDir . '/stefk/jval/src/Exception/Constraint/InvalidRegexException.php',
    'JVal\\Exception\\Constraint\\InvalidTypeException' => $vendorDir . '/stefk/jval/src/Exception/Constraint/InvalidTypeException.php',
    'JVal\\Exception\\Constraint\\LessThanZeroException' => $vendorDir . '/stefk/jval/src/Exception/Constraint/LessThanZeroException.php',
    'JVal\\Exception\\Constraint\\MissingKeywordException' => $vendorDir . '/stefk/jval/src/Exception/Constraint/MissingKeywordException.php',
    'JVal\\Exception\\Constraint\\NotPrimitiveTypeException' => $vendorDir . '/stefk/jval/src/Exception/Constraint/NotPrimitiveTypeException.php',
    'JVal\\Exception\\Constraint\\NotStrictlyPositiveException' => $vendorDir . '/stefk/jval/src/Exception/Constraint/NotStrictlyPositiveException.php',
    'JVal\\Exception\\Constraint\\NotUniqueException' => $vendorDir . '/stefk/jval/src/Exception/Constraint/NotUniqueException.php',
    'JVal\\Exception\\JsonDecodeException' => $vendorDir . '/stefk/jval/src/Exception/JsonDecodeException.php',
    'JVal\\Exception\\ResolverException' => $vendorDir . '/stefk/jval/src/Exception/ResolverException.php',
    'JVal\\Exception\\Resolver\\EmptyStackException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/EmptyStackException.php',
    'JVal\\Exception\\Resolver\\InvalidPointerIndexException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/InvalidPointerIndexException.php',
    'JVal\\Exception\\Resolver\\InvalidPointerTargetException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/InvalidPointerTargetException.php',
    'JVal\\Exception\\Resolver\\InvalidRemoteSchemaException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/InvalidRemoteSchemaException.php',
    'JVal\\Exception\\Resolver\\InvalidSegmentTypeException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/InvalidSegmentTypeException.php',
    'JVal\\Exception\\Resolver\\SelfReferencingPointerException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/SelfReferencingPointerException.php',
    'JVal\\Exception\\Resolver\\UnfetchableUriException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/UnfetchableUriException.php',
    'JVal\\Exception\\Resolver\\UnresolvedPointerIndexException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/UnresolvedPointerIndexException.php',
    'JVal\\Exception\\Resolver\\UnresolvedPointerPropertyException' => $vendorDir . '/stefk/jval/src/Exception/Resolver/UnresolvedPointerPropertyException.php',
    'JVal\\Exception\\UnsupportedTypeException' => $vendorDir . '/stefk/jval/src/Exception/UnsupportedTypeException.php',
    'JVal\\Exception\\UnsupportedVersionException' => $vendorDir . '/stefk/jval/src/Exception/UnsupportedVersionException.php',
    'JVal\\Registry' => $vendorDir . '/stefk/jval/src/Registry.php',
    'JVal\\Resolver' => $vendorDir . '/stefk/jval/src/Resolver.php',
    'JVal\\Testing\\BaseTestCase' => $vendorDir . '/stefk/jval/src/Testing/BaseTestCase.php',
    'JVal\\Testing\\ConstraintTestCase' => $vendorDir . '/stefk/jval/src/Testing/ConstraintTestCase.php',
    'JVal\\Testing\\DataTestCase' => $vendorDir . '/stefk/jval/src/Testing/DataTestCase.php',
    'JVal\\Types' => $vendorDir . '/stefk/jval/src/Types.php',
    'JVal\\Uri' => $vendorDir . '/stefk/jval/src/Uri.php',
    'JVal\\Utils' => $vendorDir . '/stefk/jval/src/Utils.php',
    'JVal\\Validator' => $vendorDir . '/stefk/jval/src/Validator.php',
    'JVal\\Walker' => $vendorDir . '/stefk/jval/src/Walker.php',
    'Klein\\AbstractResponse' => $vendorDir . '/klein/klein/src/Klein/AbstractResponse.php',
    'Klein\\AbstractRouteFactory' => $vendorDir . '/klein/klein/src/Klein/AbstractRouteFactory.php',
    'Klein\\App' => $vendorDir . '/klein/klein/src/Klein/App.php',
    'Klein\\DataCollection\\DataCollection' => $vendorDir . '/klein/klein/src/Klein/DataCollection/DataCollection.php',
    'Klein\\DataCollection\\HeaderDataCollection' => $vendorDir . '/klein/klein/src/Klein/DataCollection/HeaderDataCollection.php',
    'Klein\\DataCollection\\ResponseCookieDataCollection' => $vendorDir . '/klein/klein/src/Klein/DataCollection/ResponseCookieDataCollection.php',
    'Klein\\DataCollection\\RouteCollection' => $vendorDir . '/klein/klein/src/Klein/DataCollection/RouteCollection.php',
    'Klein\\DataCollection\\ServerDataCollection' => $vendorDir . '/klein/klein/src/Klein/DataCollection/ServerDataCollection.php',
    'Klein\\Exceptions\\DispatchHaltedException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/DispatchHaltedException.php',
    'Klein\\Exceptions\\DuplicateServiceException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/DuplicateServiceException.php',
    'Klein\\Exceptions\\HttpException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/HttpException.php',
    'Klein\\Exceptions\\HttpExceptionInterface' => $vendorDir . '/klein/klein/src/Klein/Exceptions/HttpExceptionInterface.php',
    'Klein\\Exceptions\\KleinExceptionInterface' => $vendorDir . '/klein/klein/src/Klein/Exceptions/KleinExceptionInterface.php',
    'Klein\\Exceptions\\LockedResponseException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/LockedResponseException.php',
    'Klein\\Exceptions\\RegularExpressionCompilationException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/RegularExpressionCompilationException.php',
    'Klein\\Exceptions\\ResponseAlreadySentException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/ResponseAlreadySentException.php',
    'Klein\\Exceptions\\RoutePathCompilationException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/RoutePathCompilationException.php',
    'Klein\\Exceptions\\UnhandledException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/UnhandledException.php',
    'Klein\\Exceptions\\UnknownServiceException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/UnknownServiceException.php',
    'Klein\\Exceptions\\ValidationException' => $vendorDir . '/klein/klein/src/Klein/Exceptions/ValidationException.php',
    'Klein\\HttpStatus' => $vendorDir . '/klein/klein/src/Klein/HttpStatus.php',
    'Klein\\Klein' => $vendorDir . '/klein/klein/src/Klein/Klein.php',
    'Klein\\Request' => $vendorDir . '/klein/klein/src/Klein/Request.php',
    'Klein\\Response' => $vendorDir . '/klein/klein/src/Klein/Response.php',
    'Klein\\ResponseCookie' => $vendorDir . '/klein/klein/src/Klein/ResponseCookie.php',
    'Klein\\Route' => $vendorDir . '/klein/klein/src/Klein/Route.php',
    'Klein\\RouteFactory' => $vendorDir . '/klein/klein/src/Klein/RouteFactory.php',
    'Klein\\ServiceProvider' => $vendorDir . '/klein/klein/src/Klein/ServiceProvider.php',
    'Klein\\Validator' => $vendorDir . '/klein/klein/src/Klein/Validator.php',
);
