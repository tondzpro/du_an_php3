đây là trang index
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>List brands</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" >
</head>
<body>
    <div class="container mt-2">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>List category</h2>
                </div>
                <div class="pull-right mb-2">
                    <a class="btn btn-success" href="{{ route('category.create') }}"> New brand</a>
                </div>
            </div>
        </div>
    </div>

    @foreach ($list as $list)
                    <tr>
                        <td>{{ $list->id }}</td>
                        <td>{{ $list->name }}</td>
                        <td>
                            <form action="{{ route('category.destroy',$list->id) }}" method="Post">
                                <a class="btn btn-primary" href="{{ route('category.edit',$list->id) }}">Edit</a>
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger">Delete</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
</body>
</html>